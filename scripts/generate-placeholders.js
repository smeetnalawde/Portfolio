const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Project names and their corresponding colors
const projects = [
  { name: 'nebula-ui', color: '#4f46e5' },
  { name: 'galaxy-dashboard', color: '#10b981' },
  { name: 'astro-commerce', color: '#f59e0b' },
  { name: 'cosmic-blog', color: '#8b5cf6' },
  { name: 'stellar-app', color: '#ec4899' },
  { name: 'orbit-api', color: '#3b82f6' },
];

// Ensure the projects directory exists
const projectsDir = path.join(__dirname, '../public/projects');
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

// Create a placeholder image for each project
projects.forEach((project) => {
  const width = 800;
  const height = 600;
  const canvas = createCanvas(width, height);
  const context = canvas.getContext('2d');

  // Fill background
  context.fillStyle = project.color + '20'; // Add some transparency
  context.fillRect(0, 0, width, height);

  // Add project name
  context.fillStyle = project.color;
  context.font = 'bold 48px Arial';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(
    project.name.replace(/-/g, ' ').toUpperCase(),
    width / 2,
    height / 2
  );

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(projectsDir, `${project.name}.jpg`), buffer);
});

console.log(`Generated ${projects.length} placeholder images in ${projectsDir}`);
