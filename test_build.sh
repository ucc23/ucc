#!/usr/bin/env bash
set -euo pipefail

SRC="_clusters"
DST="_clusters2"
HTML="cl_test.html"
N="${1:-10}"

# 1. Clean destination
mkdir -p "$DST"
rm -f "$DST"/*.md

# 2. Copy 100 random markdown files
ls "$SRC"/*.md | shuf -n "$N" | xargs -I {} cp {} "$DST"/

# 3. Generate HTML list items
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

# 4. Generate full HTML file
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

# 5. Open the HTML file
xdg-open "$HTML" >/dev/null 2>&1 &

# 6. Run Jekyll
bundle exec jekyll serve --incremental




# #!/usr/bin/env bash
# set -euo pipefail

# SRC="_clusters"
# DST="_clusters2"
# HTML="cl_test.html"
# N=100

# # 1. Clean destination
# mkdir -p "$DST"
# rm -f "$DST"/*.md

# # 2. Copy 100 random markdown files
# ls "$SRC"/*.md | shuf -n "$N" | xargs -I {} cp {} "$DST"/

# # 3. Generate HTML list
# LIST_ITEMS=""

# for f in "$DST"/*.md; do
#     name=$(basename "$f" .md)

#     uti=$(awk '
#         /^---/ {c++; next}
#         c==1 && /^UTI:/ {sub(/^UTI:[[:space:]]*/, ""); print; exit}
#     ' "$f")

#     uti=${uti:-—}

#     LIST_ITEMS+="<li><a href=\"http://127.0.0.1:4000/_clusters2/$name\" target=\"content\">$name</a> — UTI: $uti</li>\n"
# done

# # 4. Rewrite HTML (replace <ul id="md-list">...</ul>)
# awk -v items="$LIST_ITEMS" '
# BEGIN {in_ul=0}

# /<ul id="md-list">/ {
#     print
#     printf "%s", items
#     in_ul=1
#     next
# }

# /<\/ul>/ {
#     in_ul=0
#     print
#     next
# }

# !in_ul { print }
# ' "$HTML" > "${HTML}.tmp" && mv "${HTML}.tmp" "$HTML"


# # 5. Run Jekyll
# bundle exec jekyll serve --incremental
