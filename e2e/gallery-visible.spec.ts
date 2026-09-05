import { test, expect } from '@playwright/test';

test('clicking Gallery brings the gallery image fully into view', async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 940 });
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  await page.locator('nav a[href*="#designs"]').first().click();
  await page.waitForTimeout(2000);

  const m = await page.evaluate(() => {
    const sec = document.getElementById('designs')!;
    const nav = document.querySelector('nav')!.getBoundingClientRect();
    const img = sec.querySelector('img')!.getBoundingClientRect();
    return {
      vh: window.innerHeight,
      navBottom: nav.bottom,
      sectionTop: sec.getBoundingClientRect().top,
      imgTop: img.top,
      imgBottom: img.bottom,
    };
  });

  // The section must sit just under the navbar, not 100px below it.
  expect(m.sectionTop - m.navBottom).toBeLessThan(20);
  // The carousel image must be fully inside the viewport.
  expect(m.imgBottom).toBeLessThanOrEqual(m.vh);
  expect(m.imgTop).toBeGreaterThanOrEqual(0);
});
