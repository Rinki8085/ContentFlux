const fs = require('fs');
const path = require('path');
const https = require('https');
const routes = require('./src/Routes/routes');

const baseUrl = 'https://www.thecontentflux.com';
const today = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
   console.log(route)
    return `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  })
  .join('')}
</urlset>`;

// Write sitemap to public folder
fs.writeFileSync(path.resolve(__dirname, './public/sitemap.xml'), sitemap);
console.log('✅ Sitemap generated successfully!');

// Ping Google
const sitemapUrl = 'https://www.thecontentflux.com/sitemap.xml';  
const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
console.log(pingUrl)
https.get(pingUrl, (res) => {
  if (res.statusCode === 200) {
    console.log('📢 Successfully pinged Google for sitemap update!');
  } else {
    console.error(`❌ Failed to ping Google. Status Code: ${res.statusCode}`);
  }
}).on('error', (e) => {
  console.error(`❌ Error while pinging Google: ${e.message}`);
});
