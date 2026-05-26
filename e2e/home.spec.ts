import { test, expect } from '@playwright/test';

test('homepage loads and shows pricing section', async ({ page }) => {
  await page.goto('/');
  // Title may vary; ensure it contains either the site name or the primary phrase
  await expect(page).toHaveTitle(/Luxury Interior Designers|Pearl Interiors/i);
  await expect(page.locator('#pricing')).toBeVisible();
  // There should be three "Get Free Quote" links/buttons
  const quote = page.getByRole('link', { name: /Get Free Quote/i });
  await expect(quote).toHaveCount(3);
});
