const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');

(async () => {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless', '--no-sandbox'] });
  const options = {
    logLevel: 'info',
    output: 'json',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port,
  };
  const runnerResult = await lighthouse('http://127.0.0.1:4174', options);
  fs.writeFileSync('lighthouse-report-final.json', runnerResult.report);
  const cats = runnerResult.lhr.categories;
  console.log('Performance:', Math.round(cats.performance.score * 100));
  console.log('Accessibility:', Math.round(cats.accessibility.score * 100));
  console.log('Best Practices:', Math.round(cats['best-practices'].score * 100));
  console.log('SEO:', Math.round(cats.seo.score * 100));
  await chrome.kill();
})();
