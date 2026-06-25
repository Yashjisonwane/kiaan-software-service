const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'src', 'components', 'services');
const softwareServicesClient = path.join(__dirname, 'src', 'app', 'software-services', 'SoftwareServicesClient.tsx');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.tsx')) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });
  return arrayOfFiles;
}

const files = getAllFiles(servicesDir);
if (fs.existsSync(softwareServicesClient)) {
    files.push(softwareServicesClient);
}

const replacements = [
    // Typography
    { search: /text-5xl md:text-7xl/g, replace: 'text-4xl md:text-5xl' },
    { search: /text-3xl md:text-5xl/g, replace: 'text-2xl md:text-3xl' },
    { search: /text-2xl md:text-4xl/g, replace: 'text-xl md:text-2xl' },
    { search: /text-lg md:text-xl/g, replace: 'text-base' },
    { search: /text-lg leading-relaxed/g, replace: 'text-sm text-zinc-400 leading-relaxed' },
    // Spacing
    { search: /py-20/g, replace: 'py-12' },
    { search: /pt-40 pb-20/g, replace: 'pt-28 pb-12' },
    { search: /mb-16/g, replace: 'mb-10' },
    { search: /mb-12/g, replace: 'mb-8' },
    { search: /mb-10/g, replace: 'mb-8' },
    // Constraints
    { search: /max-w-6xl/g, replace: 'max-w-5xl' },
    { search: /max-w-5xl/g, replace: 'max-w-4xl' },
    // Buttons
    { search: /px-8 py-4/g, replace: 'px-6 py-2.5 text-sm' },
    // Layouts
    { search: /gap-16/g, replace: 'gap-10' },
    { search: /gap-10/g, replace: 'gap-8' },
    { search: /gap-8/g, replace: 'gap-6' },
    { search: /p-10/g, replace: 'p-6' },
    { search: /p-8/g, replace: 'p-5' },
    // Min heights (Only replace on full screens, not on other random components)
    { search: /min-h-screen bg-\[\#0a0a0a\] text-white/g, replace: 'bg-[#0a0a0a] text-white' }, // Remove min-h-screen from landing page wrappers to stop stretching
    { search: /min-h-screen bg-black text-white/g, replace: 'bg-black text-white' }
];

let changedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  for (const r of replacements) {
      content = content.replace(r.search, r.replace);
  }

  // Handle specific fixes in SoftwareServicesClient.tsx that might be too broad to do blindly
  if (file.includes('SoftwareServicesClient.tsx')) {
      content = content.replace('min-h-[400px]', 'min-h-[300px]');
      content = content.replace('p-10 relative', 'p-8 relative');
  }
  
  // Handle Modals so they aren't so bloated
  if (file.includes('Modal.tsx')) {
      content = content.replace('p-4 sm:p-6 md:p-10', 'p-4 sm:p-6');
  }

  if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      changedCount++;
  }
}

console.log(`Successfully refactored ${changedCount} files.`);