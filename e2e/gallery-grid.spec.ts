import { test, expect } from '@playwright/test';

test('gallery grid shows all photos and the lightbox works', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', e => errors.push(e.message));

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await page.locator('nav a[href*="#designs"]').first().click();
  await page.waitForTimeout(1500);

  // grid shows every image in the category, and they actually load
  const grid = page.locator('#designs ul li');
  await expect(grid).toHaveCount(4);            // Bedroom = 4
  await page.waitForFunction(() =>
    [...document.querySelectorAll('#designs img')].every(i => (i as HTMLImageElement).naturalWidth > 0),
    null, { timeout: 20000 });

  // category switch changes the count
  await page.getByRole('button', { name: 'Wardrobe', exact: true }).click();
  await page.waitForTimeout(800);
  await expect(grid).toHaveCount(5);            // Wardrobe = 5

  await page.getByRole('button', { name: 'Kitchen', exact: true }).click();
  await page.waitForTimeout(800);
  await expect(grid).toHaveCount(4);

  // lightbox opens on the clicked image
  await page.locator('#designs ul li button').nth(1).click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  await expect(dialog).toContainText('Kitchen · 2 / 4');

  // arrow key advances
  await page.keyboard.press('ArrowRight');
  await expect(dialog).toContainText('Kitchen · 3 / 4');

  // next button wraps
  await page.getByRole('button', { name: 'Next image' }).click();
  await page.getByRole('button', { name: 'Next image' }).click();
  await expect(dialog).toContainText('Kitchen · 1 / 4');

  // lightbox image loads
  await page.waitForFunction(() => {
    const i = document.querySelector('[role="dialog"] img') as HTMLImageElement;
    return !!i && i.naturalWidth > 0;
  }, null, { timeout: 20000 });

  // body scroll is locked while open
  expect(await page.evaluate(() => document.body.style.overflow)).toBe('hidden');

  // escape closes and releases the lock
  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
  expect(await page.evaluate(() => document.body.style.overflow)).not.toBe('hidden');

  expect(errors).toEqual([]);
});
