import { test, expect } from '@playwright/test';

const pagesToTest = [
  '/',
  '/products',
  '/products/lido-01',
  '/compare',
  '/b2b/bulk-enquiry',
  '/locations/bangalore/executive-chairs'
];

test.describe('Console Errors Check', () => {
  for (const pagePath of pagesToTest) {
    test(`No console errors on ${pagePath}`, async ({ page }) => {
      const errors: string[] = [];

      // Listen for console errors
      page.on('console', msg => {
        if (msg.type() === 'error') {
          // Ignore known third-party extensions or inevitable warnings
          // For now we log everything that is strictly an "error"
          errors.push(`Console Error: ${msg.text()}`);
        }
      });

      // Listen for uncaught page exceptions (e.g., hydration mismatch)
      page.on('pageerror', exception => {
        errors.push(`Uncaught Exception: ${exception.message}`);
      });

      // Listen for failed responses (e.g. 404 image load)
      // Exclude fetch/xhr as they might be intentional API failures or ad-blockers in some envs
      page.on('response', response => {
        if (response.status() >= 400 && response.request().resourceType() !== 'fetch' && response.request().resourceType() !== 'xhr') {
          errors.push(`Failed Request [${response.status()}]: ${response.url()}`);
        }
      });

      // Navigate to page
      await page.goto(pagePath, { waitUntil: 'networkidle' });

      // Assert that no errors were collected
      expect(errors, `Found errors on ${pagePath}:\n${errors.join('\n')}`).toEqual([]);
    });
  }
});
