import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const ASSETS_DIR = 'src/assets';

async function getFiles(dir) {
    const dirents = await fs.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(dirents.map((dirent) => {
        const res = path.resolve(dir, dirent.name);
        return dirent.isDirectory() ? getFiles(res) : res;
    }));
    return Array.prototype.concat(...files);
}

async function run() {
    try {
        console.log('--- Starting Deep Performance Asset Optimization ---');
        const files = await getFiles(ASSETS_DIR);
        
        for (const inputPath of files) {
            if (inputPath.endsWith('.png') || inputPath.endsWith('.jpg') || inputPath.endsWith('.jpeg')) {
                const ext = path.extname(inputPath);
                const outputPath = inputPath.replace(ext, '.webp');
                
                // Skip if webp already exists and is newer (basic cache)
                try {
                    const outStat = await fs.stat(outputPath);
                    const inStat = await fs.stat(inputPath);
                    if (outStat.mtime > inStat.mtime) {
                        // console.log(`Skipping (Up to date): ${path.basename(inputPath)}`);
                        continue;
                    }
                } catch (e) {
                    // Output doesn't exist, proceed
                }

                console.log(`Optimizing: ${path.relative(ASSETS_DIR, inputPath)}...`);
                
                const fileName = path.basename(inputPath).toLowerCase();
                const parentDir = path.dirname(inputPath).split(path.sep).pop().toLowerCase();
                
                let targetWidth = 800; // Default
                let quality = 75;

                if (fileName.includes('logo')) {
                    targetWidth = 400;
                    quality = 80;
                } else if (parentDir === 'img' || fileName.includes('hero')) {
                    targetWidth = 1200;
                    quality = 70;
                } else if (parentDir === 'dir') {
                    targetWidth = 600;
                    quality = 70;
                }
                
                await sharp(inputPath)
                    .resize({ width: targetWidth, withoutEnlargement: true })
                    .webp({ quality: quality })
                    .toFile(outputPath);
                
                const oldSize = (await fs.stat(inputPath)).size;
                const newSize = (await fs.stat(outputPath)).size;
                console.log(`  Done: ${(oldSize / 1024).toFixed(1)}KB -> ${(newSize / 1024).toFixed(1)}KB`);
            }
        }
        
        console.log('\nAsset Optimization Complete!');
    } catch (err) {
        console.error('Error during optimization:', err);
    }
}

run();
