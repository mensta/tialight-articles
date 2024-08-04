const fs = require('fs');
const path = require('path');

// Define source and destination directory paths
const sourceDir = path.join('astro', 'node_modules');
const destDir = path.join('tmp');

// Check if the source directory exists
if (fs.existsSync(sourceDir)) {
  // Create the destination directory if it doesn't exist
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
  }

  // Move the directory
  fs.rename(sourceDir, path.join(destDir, 'node_modules'), (err) => {
    if (err) {
      console.error('Error moving directory:', err);
    } else {
      console.log('Directory moved successfully.');
    }
  });
} else {
  console.log('Source directory not found.');
}