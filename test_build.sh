#!/usr/bin/env bash
set -euo pipefail

SRC="_clusters"
DST="_clusters2"
HTML="cl_test.html"

# 1. Parameter Initialization
# N: Number of additional random files to select
N="${1:-0}"
shift || true

EXCLUDE_PREFIXES=()
SPECIFIC_OBJECTS=()

# Categorize remaining arguments into exclusion filters or specific filenames
for arg in "$@"; do
    if [[ "$arg" == -* ]]; then
        EXCLUDE_PREFIXES+=("${arg#-}")
    else
        SPECIFIC_OBJECTS+=("$arg")
    fi
done

# 2. Filesystem Preparation
mkdir -p "$DST"
rm -f "$DST"/*.md

# 3. Process Specific Objects
for obj in "${SPECIFIC_OBJECTS[@]}"; do
    FILE="$SRC/$obj.md"
    if [[ -f "$FILE" ]]; then
        cp "$FILE" "$DST/"
    else
        echo "Warning: $FILE not found in $SRC" >&2
    fi
done

# 4. Process Random Selection (N) with Exclusions
if [[ "$N" -gt 0 ]]; then
    # Generate list of available files
    FILES=$(ls "$SRC"/*.md 2>/dev/null || true)

    # Apply exclusion prefixes
    for p in "${EXCLUDE_PREFIXES[@]}"; do
        FILES=$(echo "$FILES" | grep -v "/$p")
    done

    # Exclude objects already explicitly copied to prevent duplicates
    for obj in "${SPECIFIC_OBJECTS[@]}"; do
        FILES=$(echo "$FILES" | grep -v "/$obj.md$")
    done

    # Select N random files from the remaining pool
    echo "$FILES" | shuf -n "$N" | xargs -I {} cp {} "$DST/"
fi

# 5. HTML Generation
LIST_ITEMS=""
for f in "$DST"/*.md; do
    [[ -e "$f" ]] || continue
    name=$(basename "$f" .md)

    # Extract UTI from YAML frontmatter
    uti=$(awk '
        /^---/ {c++; next}
        c==1 && /^UTI:/ {sub(/^UTI:[[:space:]]*/, ""); print; exit}
    ' "$f")
    uti=${uti:-—}

    LIST_ITEMS+="    <li><a href=\"http://127.0.0.1:4000/_clusters2/$name\" target=\"content\">$name</a> — UTI: $uti</li>"
done

cat > "$HTML" <<EOF
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Clusters_2</title>
<style>
body { display: flex; justify-content: center; font-family: sans-serif; }
#md-list { list-style: disc; padding-left: 1.5em; }
</style>
</head>
<body>
<ul id="md-list">
$LIST_ITEMS
</ul>
</body>
</html>
EOF

# 6. Execution
xdg-open "$HTML" >/dev/null 2>&1 &
bundle exec jekyll serve --incremental
