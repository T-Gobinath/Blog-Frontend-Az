import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const p = path.join(__dirname, '..', 'src', 'data', 'pagesContent.js');
let raw = fs.readFileSync(p, 'utf8');

const tmpPath = path.join(__dirname, 'tmpPages.js');
// replace export const with just const so we can eval it
fs.writeFileSync(tmpPath, raw.replace('export const pagesContent', 'const pagesContent'));

import('./tmpPages.js').catch(err => {
    // We can't easily import a file we just created without it being a module. Let's just use regex on the raw string, it's safer.
});

// Since evaling ES modules in Node is tricky, let's just do text replacement.
let modified = raw;

const gridInjection = `
    gridImages: [
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
    ],
    paragraphs: [
        "At TIMA, we relentlessly pursue operational excellence. Our highly skilled engineering teams continually push the boundaries of modern manufacturing and enterprise IT solutions. We believe in providing robust, infinitely scalable solutions that seamlessly integrate with our clients' existing global infrastructure. By rigorously upholding the absolute highest standards of quality control—from initial conceptual design and digital twin simulation all the way through to final field commissioning—we ensure our deliverable products are absolutely faultless.",
        "Our strategic dedication to sustainable, environmentally eco-friendly methodologies heavily reinforces our long-term corporate vision for a greener industrial future. We partner collaboratively with multinational enterprises to solve their most intensely complex supply chain and digital transformation bottlenecks. Through heavy, continuous investment in cutting-edge robotics, advanced AI automation, and unparalleled human talent, TIMA consistently delivers immense, quantifiable value to our shareholders and partners globally. We operate strictly within certified, bio-burden monitored ISO regulated cleanroom environments, expertly manufacturing critical, high-precision components for the global industry.",
        "Equipped with an expansive, interconnected fleet of state-of-the-art 5-axis CNC machining centers and Swiss-style multi-spindle lathes, our production facility handles the most complex geometrical and volumetric challenges with unparalleled repeatability. We are foremost experts in highly advanced subtractive manufacturing, reliably machining a massive variety of materials ranging from standard aerospace aluminum and naval brass to notoriously difficult exotic alloys like Tungsten, Invar, and Hastelloy. Our strict, localized quality control protocols and in-machine spindle probing ensure we consistently hold tight tolerances across massive production runs."
    ],
    linkText: 'new customer enquiry',
    content: [`;

modified = modified.replace(/content: \[/g, gridInjection);

fs.writeFileSync(p, modified, 'utf8');
console.log('Successfully injected grid images and paragraphs roughly ~230 words into all pages.');
