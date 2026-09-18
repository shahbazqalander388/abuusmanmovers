import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { ALL_LOCATIONS } from '../src/data/jubailLocations.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://abuusmanmovers.com';
const today = new Date().toISOString().split('T')[0];

const sitemapEntries = [
  // Homepage
  { path: '', changefreq: 'daily', priority: '1.0' },

  // Core Service Routes
  { path: '/services', changefreq: 'weekly', priority: '0.9' },
  { path: '/house-moving', changefreq: 'weekly', priority: '0.9' },
  { path: '/villa-moving', changefreq: 'weekly', priority: '0.9' },
  { path: '/furniture-moving', changefreq: 'weekly', priority: '0.9' },
  { path: '/office-relocation', changefreq: 'weekly', priority: '0.9' },
  { path: '/packing-services', changefreq: 'weekly', priority: '0.9' },
  { path: '/furniture-assembly', changefreq: 'weekly', priority: '0.9' },

  // Jubail District & Regional Coverage Hub
  { path: '/districts', changefreq: 'weekly', priority: '0.9' },

  // Dynamic Jubail Districts & Regional Commercial Cities
  ...ALL_LOCATIONS.map((loc) => ({
    path: `/districts/${loc.slug}`,
    changefreq: 'weekly',
    priority: loc.isDistrict ? '0.85' : '0.80',
  })),

  // Core Pages
  { path: '/service-areas', changefreq: 'weekly', priority: '0.85' },
  { path: '/about', changefreq: 'monthly', priority: '0.8' },
  { path: '/gallery', changefreq: 'weekly', priority: '0.8' },
  { path: '/contact', changefreq: 'monthly', priority: '0.8' },
];

const xmlUrls = sitemapEntries
  .map(
    (entry) => `  <url>
    <loc>${baseUrl}${entry.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join('\n');

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${xmlUrls}
</urlset>
`;

const outPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outPath, sitemapXml.trim(), 'utf8');
console.log(`Successfully generated sitemap with ${sitemapEntries.length} routes at ${outPath}`);
