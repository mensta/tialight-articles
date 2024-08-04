const fs = require('fs');
const path = require('path');

// Define source and destination directory paths
const astroModuleDir = path.join('astro', 'node_modules');
const cacheDir = path.join('tmp', 'node_modules');

// Check if the source directory exists
if (fs.existsSync(cacheDir)) {
  // Move the directory
  fs.rename(cacheDir, astroModuleDir, (err) => {
    if (err) {
      console.error('Error moving directory:', err);
    } else {
      console.log('Directory moved successfully.');
    }
  });
} else {
  console.log('Source directory not found.');
}