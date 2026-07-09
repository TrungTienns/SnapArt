import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'src', 'assets', 'images');
const max_width = 1920;

async function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.isFile() && /\.(jpe?g|png)$/i.test(entry.name)) {
      await optimizeImage(fullPath);
    }
  }
}

async function optimizeImage(filePath) {
  const dir = path.dirname(filePath);
  const ext = path.extname(filePath);
  const basename = path.basename(filePath, ext);
  const newFilePath = path.join(dir, `${basename}.webp`);

  try {
    const metadata = await sharp(filePath).metadata();
    
    let pipeline = sharp(filePath);
    
    // Resize if too wide
    if (metadata.width > max_width) {
      console.log(`Resizing ${filePath} from ${metadata.width}px to ${max_width}px...`);
      pipeline = pipeline.resize(max_width, null, { withoutEnlargement: true });
    }

    // Convert to webp
    await pipeline
      .webp({ quality: 80, effort: 6 }) // quality 80 is good, effort 6 is maximum compression effort
      .toFile(newFilePath);
      
    console.log(`Optimized: ${filePath} -> ${newFilePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

console.log('Starting image optimization...');
processDirectory(imagesDir)
  .then(() => console.log('Image optimization complete!'))
  .catch(err => console.error(err));
