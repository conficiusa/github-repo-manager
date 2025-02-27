#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Path configuration
const CONTENT_DIR = path.join(process.cwd(), 'contents', 'docs');
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'search-data');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'documents.json');

// Make sure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Projects structure from documents.ts
const projects = [
  {
    title: "Github Repo Manager",
    slug: "/github-repo-manager",
    sections: [
      {
        title: "Introduction",
        slug: "/introduction",
        items: [
          { title: "Installation", slug: "/installation" },
          { title: "Setup", slug: "/setup" },
          { title: "Changelog", slug: "/changelog" }
        ]
      },
      {
        title: "Usage",
        slug: "/usage",
        items: [
          { title: "Getting started", slug: "/getting-started" },
          { title: "Configuration", slug: "/configuration" },
          { title: "Customization", slug: "/customization" }
        ]
      }
    ]
  }
];

// Function to extract content from MDX files
function extractContentFromMdx(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      // console.log(`File not found: ${filePath}`);
      return { content: '', metadata: {} };
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    return { content, metadata: data || {} };
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return { content: '', metadata: {} };
  }
}

// Generate search data for all projects
const searchData = [];

projects.forEach(project => {
  // Add project entry
  const projectData = {
    title: project.title,
    slug: project.slug,
    content: `${project.title} documentation`,
    description: `Documentation for ${project.title}`
  };
  searchData.push(projectData);

  // Process each section
  project.sections.forEach(section => {
    // Add section entry
    const sectionSlug = `${project.slug}${section.slug}`;
    const sectionPath = path.join(CONTENT_DIR, ...sectionSlug.split('/').filter(p => p).concat(['index.mdx']));
    const { content: sectionContent, metadata: sectionMetadata } = extractContentFromMdx(sectionPath);

    searchData.push({
      title: section.title,
      slug: sectionSlug,
      content: sectionContent,
      description: sectionMetadata.description || `${section.title} section for ${project.title}`
    });

    // Process each item in the section
    section.items.forEach(item => {
      const itemSlug = `${project.slug}${section.slug}${item.slug}`;
      const itemPath = path.join(CONTENT_DIR, ...itemSlug.split('/').filter(p => p).concat(['index.mdx']));
      
      // Try with index.mdx
      let { content: itemContent, metadata: itemMetadata } = extractContentFromMdx(itemPath);
      
      // If not found, try without index.mdx
      if (!itemContent) {
        const altPath = path.join(CONTENT_DIR, ...itemSlug.split('/').filter(p => p).concat(['index.md']));
        ({ content: itemContent, metadata: itemMetadata } = extractContentFromMdx(altPath));
      }

      searchData.push({
        title: item.title,
        slug: itemSlug,
        content: itemContent,
        description: itemMetadata.description || `${item.title} for ${project.title}`
      });
    });
  });
});

// Write the search data to the output file
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(searchData, null, 2));
console.log(`Search data generated at ${OUTPUT_FILE}`);