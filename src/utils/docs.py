import os
import re
import json
import yaml
from pathlib import Path
import argparse
from typing import Set
import aiohttp
import asyncio
from bs4 import BeautifulSoup

class DocumentProcessor:
    def __init__(self, base_dir: str):
        self.base_dir = Path(base_dir)

    def process_h1(self):
        """Extract first H1 header and update frontmatter"""
        for file_path in self.base_dir.glob('**/*.md'):
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            header_match = re.search(r'^#\s+(.+?)$', content, re.MULTILINE)
            if not header_match:
                print(f"No header found in {file_path}")
                continue

            title = header_match.group(1).strip().replace("'", "'")
            content = re.sub(r'^#\s+.+?\n\n', '', content, flags=re.MULTILINE)

            frontmatter_match = re.match(r'^---\n(.*?)\n---\n', content, re.DOTALL)
            if not frontmatter_match:
                print(f"No frontmatter found in {file_path}")
                continue

            frontmatter = frontmatter_match.group(1)
            if 'title:' not in frontmatter:
                new_frontmatter = frontmatter.strip() + f"\ntitle: '{title}'"
                content = content.replace(frontmatter, new_frontmatter)

            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated {file_path}")

    def update_copyright_notice(self):
        """Update copyright notices in files"""
        for file_path in self.base_dir.glob('**/*.md'):
            file_name_clean = file_path.stem.replace('waterfox', 'firefox')
            copyright_notice = f"""
---
:::note[Copyright and Licensing]
Modified from [Common Myths about Private Browsing](https://support.mozilla.org/en-US/kb/{file_name_clean}). Original by [Mozilla Contributors](https://support.mozilla.org/en-US/kb/{file_name_clean}#doc-contributors). Licensed under the [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
:::
"""
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            if ":::note[Copyright and Licensing]" not in content:
                with open(file_path, 'a', encoding='utf-8') as f:
                    f.write(copyright_notice)
                print(f"Added copyright notice to {file_path}")
            else:
                updated_content = re.sub(
                    r':::note\[Copyright and Licensing\].*?:::',
                    copyright_notice.strip(),
                    content,
                    flags=re.DOTALL
                )
                if updated_content != content:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(updated_content)
                    print(f"Updated existing copyright notice in {file_path}")

    def generate_platform_config(self):
        """Generate platform configuration"""
        def get_category_label(dir_path):
            category_file = dir_path / '_category_.json'
            if category_file.exists():
                with open(category_file, 'r', encoding='utf-8') as f:
                    try:
                        return json.load(f)['label']
                    except:
                        return None
            return None

        def process_directory(dir_path, relative_path):
            items = []
            for subdir in dir_path.iterdir():
                if subdir.is_dir():
                    category_label = get_category_label(subdir)
                    if category_label:
                        subdir_relative_path = f"{relative_path}/{subdir.name}"
                        subdir_items = process_directory(subdir, subdir_relative_path)
                        if subdir_items:
                            items.append({
                                "label": category_label,
                                "items": subdir_items
                            })
                        else:
                            items.append({
                                "label": category_label,
                                "autogenerate": {
                                    "directory": subdir_relative_path
                                }
                            })
            return items

        platform_map = {'Windows': 'Windows', 'Linux': 'Linux', 'macOS': 'macOS'}
        config = {
            "label": "Support Test",
            "items": []
        }

        for platform in platform_map:
            platform_path = self.base_dir / platform
            if not platform_path.is_dir():
                continue

            relative_path = f"docs/support.bak/{platform}"
            subdirs = process_directory(platform_path, relative_path)

            platform_config = {
                "label": platform_map[platform],
                "items": subdirs if subdirs else {
                    "autogenerate": {
                        "directory": relative_path
                    }
                }
            }
            config["items"].append(platform_config)

        return config

    def remove_slug(self):
        """Remove slug from frontmatter"""
        for file_path in self.base_dir.glob('**/*.md'):
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            content = re.sub(r'^slug:.*?\n', '', content, flags=re.MULTILINE)
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Removed slug from {file_path}")

    def update_copyright_block(self):
        """Update copyright block with correct title"""
        for file_path in self.base_dir.glob('**/*.md'):
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            frontmatter_match = re.search(r'^---\n(.*?)\n---', content, re.DOTALL)
            if not frontmatter_match:
                print(f"No frontmatter found in {file_path}")
                continue

            frontmatter = yaml.safe_load(frontmatter_match.group(1))
            if 'title' not in frontmatter:
                print(f"No title found in {file_path}")
                continue

            title = frontmatter['title']
            copyright_pattern = r':::note\[Copyright and Licensing\]\n\[Common Myths about Private Browsing\]'
            new_copyright_start = f':::note[Copyright and Licensing]\n[{title}]'

            updated_content = re.sub(copyright_pattern, new_copyright_start, content)

            if updated_content != content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(updated_content)
                print(f"Updated copyright block in {file_path}")

    def compare_platform_files(self):
        """Compare files across platform directories"""
        def get_relative_files(directory: Path) -> Set[str]:
            files = set()
            if directory.exists():
                for file_path in directory.glob('**/*.md'):
                    relative_path = file_path.relative_to(directory)
                    files.add(str(relative_path))
            return files

        linux_files = get_relative_files(self.base_dir / "Linux")
        darwin_files = get_relative_files(self.base_dir / "macOS")
        winnt_files = get_relative_files(self.base_dir / "Windows")

        print(f"Linux files: {len(linux_files)}")
        print(f"Darwin files: {len(darwin_files)}")
        print(f"WINNT files: {len(winnt_files)}")

        darwin_missing = darwin_files - linux_files
        winnt_missing = winnt_files - linux_files

        if darwin_missing or winnt_missing:
            print("\nFiles missing from Linux directory:")
            if darwin_missing:
                print("\nFiles in Darwin but not in Linux:")
                for file in sorted(darwin_missing):
                    print(f"- {file}")
            if winnt_missing:
                print("\nFiles in WINNT but not in Linux:")
                for file in sorted(winnt_missing):
                    print(f"- {file}")
        else:
            print("\nLinux directory contains all files present in Darwin and WINNT")

    def find_unused_images(self, delete: bool = False):
        """Find and optionally delete unused images"""
        image_files = set()
        for ext in ['*.png', '*.jpg', '*.jpeg', '*.gif', '*.svg', '*.webp']:
            image_files.update(Path('public/assets/docs').rglob(ext.lower()))
            image_files.update(Path('public/assets/docs').rglob(ext.upper()))

        image_paths = {img.name: img for img in image_files}
        image_set = set(image_paths.keys())
        referenced_images = set()

        for md_file in self.base_dir.rglob('*.md'):
            content = md_file.read_text(encoding='utf-8')
            md_matches = re.findall(r'!\[.*?\]\((.*?)\)', content)
            html_matches = re.findall(r'<img.*?src=["\'](.*?)["\']', content)

            for match in md_matches + html_matches:
                referenced_images.add(os.path.basename(match))

        unused_images = image_set - referenced_images

        print('Unused images:')
        for img in sorted(unused_images):
            print(f"{img} ({image_paths[img]})")
        print(f'\nTotal unused images: {len(unused_images)}')

        if delete and unused_images:
            if input("\nDelete unused images? (yes/no): ").lower() == 'yes':
                deleted_count = 0
                for img in unused_images:
                    try:
                        image_paths[img].unlink()
                        print(f"Deleted: {image_paths[img]}")
                        deleted_count += 1
                    except Exception as e:
                        print(f"Error deleting {img}: {e}")
                print(f"\nSuccessfully deleted {deleted_count} unused images")

    def convert_file_extensions(self, from_ext: str, to_ext: str):
        """Convert file extensions"""
        files = self.base_dir.rglob(f'*.{from_ext}')
        converted_count = 0

        for file_path in files:
            try:
                new_path = file_path.with_suffix(f'.{to_ext}')
                file_path.rename(new_path)
                print(f"Converted: {file_path} -> {new_path}")
                converted_count += 1
            except Exception as e:
                print(f"Error converting {file_path}: {e}")

        print(f"\nSuccessfully converted {converted_count} files")

    def process_notes_and_images(self):
        """Process notes, tips, and image formatting"""
        for file_path in self.base_dir.glob('**/*.md'):
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            # Convert notes and tips
            content = re.sub(r'\*\*(?:Note|Tip):\*\*(.*?)(?=\n|$)',
                        lambda m: f":::{m.group(0).lower().split(':')[0][2:]}\n{m.group(1).strip()}\n:::",
                        content)

            # Convert button images
            content = re.sub(r'!\[(.*?Button)\]\((.*?)\)',
                        lambda m: f'<img alt="{m.group(1)}" class="inline-image" src="{m.group(2)}">',
                        content)

            # Convert icon images
            content = re.sub(r'(?:icon )?!\[(.*?icon.*?)\]\((.*?)\)',
                        lambda m: f'<img alt="{m.group(1)}" class="inline-image" src="{m.group(2)}">',
                        content, flags=re.IGNORECASE)

            # Remove placeholder images
            content = re.sub(r'!\[.*?\]\(https://static-media-prod-cdn\.itsre-sumo\.mozilla\.net/static/placeholder\.688345f843bb37ed\.gif\)',
                        '', content)
            content = re.sub(r'\n\s*\n', '\n\n', content)

            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated notes and images in {file_path}")

    def find_similar_content(self, threshold: float = 0.9):
        """Find articles with similar content above threshold

        Args:
            threshold (float): Similarity threshold (0-1), default 0.9 (90%)
        """
        from difflib import SequenceMatcher
        import itertools

        def clean_content(text: str) -> str:
            """Remove frontmatter and normalize text for comparison"""
            # Remove frontmatter
            text = re.sub(r'^---\n.*?\n---\n', '', text, flags=re.DOTALL)
            # Remove copyright notice
            text = re.sub(r':::note\[Copyright and Licensing\].*?:::', '', text, flags=re.DOTALL)
            # Remove whitespace and convert to lowercase
            return ' '.join(text.lower().split())

        # Get all markdown files
        md_files = list(self.base_dir.glob('**/*.md'))
        similar_pairs = []

        # Compare each pair of files
        for file1, file2 in itertools.combinations(md_files, 2):
            try:
                content1 = clean_content(file1.read_text(encoding='utf-8'))
                content2 = clean_content(file2.read_text(encoding='utf-8'))

                # Skip empty files
                if not content1 or not content2:
                    continue

                similarity = SequenceMatcher(None, content1, content2).ratio()

                if similarity >= threshold:
                    similar_pairs.append((
                        file1.relative_to(self.base_dir),
                        file2.relative_to(self.base_dir),
                        similarity
                    ))
            except Exception as e:
                print(f"Error comparing {file1} and {file2}: {e}")

        # Sort by similarity (highest first)
        similar_pairs.sort(key=lambda x: x[2], reverse=True)

        if similar_pairs:
            print(f"\nFound {len(similar_pairs)} similar file pairs (similarity >= {threshold*100}%):\n")
            for file1, file2, similarity in similar_pairs:
                print(f"{similarity*100:.1f}% similar:")
                print(f"  - {file1}")
                print(f"  - {file2}\n")
        else:
            print(f"\nNo files found with similarity >= {threshold*100}%")

    def check_broken_copyright_links(self, delete: bool = False):
        """Check for broken copyright links and optionally delete files with broken links"""

        async def check_url(session, url):
            """Check if URL returns a 404 page"""
            try:
                async with session.get(url) as response:
                    if response.status == 404:
                        html = await response.text()
                        soup = BeautifulSoup(html, 'html.parser')
                        title = soup.title.string if soup.title else None
                        return bool(title and 'Page Not Found' in title)
            except Exception as e:
                print(f"Error checking {url}: {e}")
            return False

        def extract_mozilla_url(content):
            """Extract Mozilla support URL from content"""
            match = re.search(r'Modified from \[(.*?)\]\((https://support\.mozilla\.org/.*?)\)', content)
            return match.group(2) if match else None

        def delete_files(file_paths):
            """Delete files and return count of deleted files"""
            deleted_count = 0
            for file_path in file_paths:
                try:
                    file_path.unlink()
                    print(f"Deleted: {file_path.relative_to(self.base_dir)}")
                    deleted_count += 1
                except Exception as e:
                    print(f"Error deleting {file_path}: {e}")
            return deleted_count

        async def process_files():
            """Process all files and return list of files with broken links"""
            broken_files = []
            async with aiohttp.ClientSession() as session:
                for file_path in self.base_dir.glob('**/*.md'):
                    content = file_path.read_text(encoding='utf-8')
                    url = extract_mozilla_url(content)
                    if url and await check_url(session, url):
                        broken_files.append(file_path)
            return broken_files

        # Main execution
        broken_files = asyncio.run(process_files())

        if not broken_files:
            print("\nNo files found with broken copyright links")
            return

        print(f"\nFound {len(broken_files)} files with broken copyright links:")
        for file_path in broken_files:
            print(f"  - {file_path.relative_to(self.base_dir)}")

        if delete and input("\nDelete these files? (yes/no): ").lower() == 'yes':
            deleted_count = delete_files(broken_files)
            print(f"\nSuccessfully deleted {deleted_count} files")

def main():
    parser = argparse.ArgumentParser(description='Document Processing Utility')
    parser.add_argument('--dir', required=True, help='Base directory for processing')
    parser.add_argument('--action', required=True,
                      choices=['h1', 'copyright', 'config', 'slug', 'copyright-block',
                              'compare', 'images', 'convert-ext', 'process-content', 'similar', 'check-links'],
                      help='Action to perform')
    parser.add_argument('--delete', action='store_true', help='Delete unused images when using images action')
    parser.add_argument('--from-ext', help='Source extension for conversion')
    parser.add_argument('--to-ext', help='Target extension for conversion')
    parser.add_argument('--threshold', type=float, default=0.9,
                      help='Similarity threshold (0-1) for finding similar content')
    parser.add_argument('--check-links', action='store_true',
                      help='Check for broken copyright links')

    args = parser.parse_args()
    processor = DocumentProcessor(args.dir)

    actions = {
        'h1': processor.process_h1,
        'copyright': processor.update_copyright_notice,
        'config': lambda: print(json.dumps(processor.generate_platform_config(), indent=2)),
        'slug': processor.remove_slug,
        'copyright-block': processor.update_copyright_block,
        'compare': processor.compare_platform_files,
        'images': lambda: processor.find_unused_images(args.delete),
        'convert-ext': lambda: processor.convert_file_extensions(args.from_ext, args.to_ext),
        'process-content': processor.process_notes_and_images,
        'similar': lambda: processor.find_similar_content(args.threshold),
        'check-links': lambda: processor.check_broken_copyright_links(args.delete)
    }

    if args.action == 'convert-ext' and (not args.from_ext or not args.to_ext):
        parser.error("--from-ext and --to-ext are required for convert-ext action")

    actions[args.action]()

if __name__ == '__main__':
    main()
