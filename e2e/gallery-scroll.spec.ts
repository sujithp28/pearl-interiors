import { test, expect } from '@playwright/test';

test('clicking Gallery scrolls the page to the gallery section', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  const startY = await page.evaluate(() => window.scrollY);
  expect(startY).toBe(0);

  await page.locator('a[href*="#designs"]').first().click();
  await page.waitForTimeout(2000);

  const after = await page.evaluate(() => ({
    scrollY: window.scrollY,
    targetTop: document.getElementById('designs')!.getBoundingClientRect().top,
  }));

  // The page must actually have scrolled...
  expect(after.scrollY).toBeGreaterThan(100);
  // ...and the gallery should be near the top of the viewport.
  expect(Math.abs(after.targetTop)).toBeLessThan(250);
});
