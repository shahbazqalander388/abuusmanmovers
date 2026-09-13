import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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

  // District Hub & Riyadh Districts
  { path: '/districts', changefreq: 'weekly', priority: '0.9' },
  { path: '/districts/al-malqa', changefreq: 'weekly', priority: '0.85' },
  { path: '/districts/al-narjis', changefreq: 'weekly', priority: '0.85' },
  { path: '/districts/al-yasmin', changefreq: 'weekly', priority: '0.85' },
  { path: '/districts/al-olaya', changefreq: 'weekly', priority: '0.85' },
  { path: '/districts/al-sahafa', changefreq: 'weekly', priority: '0.85' },
  { path: '/districts/al-rawdah', changefreq: 'weekly', priority: '0.85' },
  { path: '/districts/al-nakheel', changefreq: 'weekly', priority: '0.85' },
  { path: '/districts/hittin', changefreq: 'weekly', priority: '0.85' },
  { path: '/districts/al-aqiq', changefreq: 'weekly', priority: '0.85' },
  { path: '/districts/al-hamra', changefreq: 'weekly', priority: '0.85' },

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
