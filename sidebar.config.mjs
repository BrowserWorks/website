import fs from "node:fs/promises";
import path from "node:path";

async function getCategoryLabel(dirPath) {
  try {
    const categoryPath = path.join(dirPath, "_category_.json");
    const content = await fs.readFile(categoryPath, "utf-8");
    const { label } = JSON.parse(content);
    return label;
  } catch {
    return path.basename(dirPath);
  }
}

async function getMarkdownFileInfo(filePath) {
  try {
    const content = await fs.readFile(filePath, "utf-8");

    // Get title from frontmatter
    const titleMatch = content.match(/title:\s*["'](.+)["']/);
    const title = titleMatch ? titleMatch[1] : path.basename(filePath, ".md");

    // Get slug from frontmatter
    const slugMatch = content.match(/slug:\s*([^\n]+)/);
    if (!slugMatch) {
      return null;
    }

    // Just use the slug as-is, ensuring it starts with /
    const slug = slugMatch[1].trim();
    const link = slug.startsWith("/") ? slug : `/${slug}`;

    return {
      label: title,
      link: link,
    };
  } catch {
    return null;
  }
}

async function buildSidebarFromDirectory(basePath, currentPath = "") {
  const fullPath = path.join(basePath, currentPath);
  const entries = await fs.readdir(fullPath, { withFileTypes: true });

  const items = [];

  // Handle markdown files first
  const mdFiles = entries.filter(
    (entry) =>
      entry.isFile() && entry.name.endsWith(".md") && entry.name !== "index.md",
  );

  for (const file of mdFiles) {
    const filePath = path.join(basePath, currentPath, file.name);
    const fileInfo = await getMarkdownFileInfo(filePath);
    if (fileInfo) {
      items.push(fileInfo);
    }
  }

  // Then handle directories
  const directories = entries.filter((entry) => entry.isDirectory());

  for (const dir of directories) {
    const dirPath = path.join(currentPath, dir.name);
    const fullDirPath = path.join(basePath, dirPath);
    const label = await getCategoryLabel(fullDirPath);

    const subItems = await buildSidebarFromDirectory(basePath, dirPath);

    if (subItems.length > 0) {
      items.push({
        label,
        collapsed: true,
        items: subItems,
      });
    } else {
      items.push({
        label,
        collapsed: true,
        autogenerate: { directory: dirPath },
      });
    }
  }

  return items;
}

export async function generateSidebar() {
  const docsPath = path.join(process.cwd(), "src/content/docs");

  const supportSection = await buildSidebarFromDirectory(
    docsPath,
    "docs/support",
  );

  const policiesSection = {
    label: "Policies",
    collapsed: true,
    autogenerate: { directory: "docs/policies" },
  };

  const releasesSection = {
    label: "Releases",
    collapsed: true,
    autogenerate: { directory: "docs/releases" },
  };

  return [
    policiesSection,
    releasesSection,
    {
      label: "Support",
      collapsed: true,
      items: supportSection,
    },
  ];
}
