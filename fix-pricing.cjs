const fs = require('fs');
const path = require('path');

const servicesDir = path.join(__dirname, 'src', 'components', 'services');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('Pricing.tsx')) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });
  return arrayOfFiles;
}

const files = getAllFiles(servicesDir);

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Change Grid to 4 columns
  content = content.replace(
    'className="grid grid-cols-1 md:grid-cols-3 gap-6"',
    'className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"'
  );
  content = content.replace(
    "className=\"grid grid-cols-1 md:grid-cols-3 gap-8\"",
    "className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8\""
  );
  content = content.replace(
    "className=\"grid grid-cols-1 md:grid-cols-3 gap-10\"",
    "className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10\""
  );

  // Change map array
  content = content.replace(
    "['Starter', 'Professional', 'Enterprise']",
    "['Free', 'Starter', 'Professional', 'Enterprise']"
  );

  // Change border logic
  content = content.replace(
    "border ${i === 1 ? 'border-yellow-500' : 'border-white/5'}",
    "border ${i === 2 ? 'border-yellow-500' : 'border-white/5'}"
  );

  // Change Most Popular tag
  content = content.replace(
    "{i === 1 && <div className=\"absolute top-0",
    "{i === 2 && <div className=\"absolute top-0"
  );

  // Change Description logic
  content = content.replace(
    "Perfect for {i === 0 ? 'small' : i === 1 ? 'growing' : 'large'} businesses",
    "Perfect for {i === 0 ? 'individuals' : i === 1 ? 'small' : i === 2 ? 'growing' : 'large'} teams"
  );

  // Change Prices
  content = content.replace(
    "{i === 0 ? '$49' : i === 1 ? '$99' : 'Custom'}",
    "{i === 0 ? '$0' : i === 1 ? '$9' : i === 2 ? '$19' : '$29'}"
  );

  // Change Price Month span
  content = content.replace(
    "{i !== 2 && <span className=\"text-lg text-zinc-500 font-sans\">/mo</span>}",
    "<span className=\"text-lg text-zinc-500 font-sans\">/mo</span>"
  );

  // Change button colors
  content = content.replace(
    "colors ${i === 1 ? 'bg-yellow-500 text-black hover:bg-white' : 'bg-transparent border border-white/10 text-white hover:bg-white/5'}",
    "colors ${i === 2 ? 'bg-yellow-500 text-black hover:bg-white' : 'bg-transparent border border-white/10 text-white hover:bg-white/5'}"
  );

  // Change button text
  content = content.replace(
    "{i === 2 ? 'Contact Sales' : 'Start Free Trial'}",
    "{i === 0 ? 'Get Started' : 'Start Free Trial'}"
  );

  fs.writeFileSync(file, content, 'utf8');
}

console.log(`Updated pricing in ${files.length} files.`);