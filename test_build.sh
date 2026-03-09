#!/usr/bin/env bash
set -euo pipefail

SRC="_clusters"
DST="_clusters2"
HTML="cl_test.html"

N="${1:-10}"
shift || true

# Collect exclusion prefixes (remove leading '-')
EXCLUDE_PREFIXES=()
for arg in "$@"; do
    [[ "$arg" == -* ]] && EXCLUDE_PREFIXES+=("${arg#-}")
done

# 1. Clean destination
mkdir -p "$DST"
rm -f "$DST"/*.md

# 2. Build file list excluding prefixes
FILES=$(ls "$SRC"/*.md)

for p in "${EXCLUDE_PREFIXES[@]}"; do
    FILES=$(echo "$FILES" | grep -v "/$p")
done

# 3. Copy N random markdown files
echo "$FILES" | shuf -n "$N" | xargs -I {} cp {} "$DST"/

# 4. Generate HTML list items
LIST_ITEMS=""

for f in "$DST"/*.md; do
    name=$(basename "$f" .md)

    uti=$(awk '
        /^---/ {c++; next}
        c==1 && /^UTI:/ {sub(/^UTI:[[:space:]]*/, ""); print; exit}
    ' "$f")

    uti=${uti:-—}

    LIST_ITEMS+="    <li><a href=\"http://127.0.0.1:4000/_clusters2/$name\" target=\"content\">$name</a> — UTI: $uti</li>"
done

# 5. Generate HTML file
cat > "$HTML" <<EOF
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Clusters_2</title>

<style>
body {
    display: flex;
    justify-content: center;
}

#md-list {
    list-style: disc;
    padding-left: 1.5em;
}
</style>
</head>
<body>

<ul id="md-list">
$LIST_ITEMS
</ul>

</body>
</html>
EOF

# 6. Open HTML
xdg-open "$HTML" >/dev/null 2>&1 &

# 7. Run Jekyll
bundle exec jekyll serve --incremental
