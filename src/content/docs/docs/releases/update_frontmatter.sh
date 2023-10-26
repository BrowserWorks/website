#!/bin/bash

for file in *.md; do

    # Extract frontmatter
    frontmatter=$(head -n4 "$file")

    # Extract and process pubDate
    pubdate=$(echo "$frontmatter" | awk -F 'pubDate: ' '{print $2}' | tr -d '[:space:]')
    newdate=$(date -j -f '%B%d%Y' "$pubdate" +%Y-%m-%d 2>/dev/null)

    # Replace pubDate line
    frontmatter=$(echo "$frontmatter" | sed "s/pubDate:.*/date: $newdate/")

    # Remove label line
    frontmatter=$(echo "$frontmatter" | sed '/label:/d')

    # Write frontmatter and content to new file
    {
        echo "$frontmatter"
        tail -n+5 "$file"
    } >"$file.tmp" && mv "$file.tmp" "$file"

    # Update slug by removing en-us
    sed -i '' 's/en-us\///g' $file

done
