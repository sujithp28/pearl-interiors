import { test, expect } from '@playwright/test';

test('menu opens and navigates to gallery', async ({ page }) => {
  await page.goto('/');

  // On small screens the menu button is visible; on desktop the nav link is visible directly.
  const menuButton = page.getByRole('button', { name: /open menu/i });
  if ((await menuButton.count()) > 0) {
    await menuButton.click();
    await expect(page.getByText('Menu')).toBeVisible();
    await expect(page.getByRole('link', { name: /Gallery/i })).toBeVisible();
    const galleryLink = page.locator('a[href*="#designs"]').first();
    await galleryLink.click();
  } else {
    // Desktop: click the nav link directly
    const galleryLink = page.locator('a[href*="#designs"]').first();
    await galleryLink.click();
  }
  await expect(page.locator('#designs')).toBeVisible();
});

test('opens consultation form from hero', async ({ page }) => {
  await page.goto('/');

  // Click the hero CTA to open the consultation form
  await page.getByRole('button', { name: /Schedule Free Design Consultation/i }).click();

  // The consultation dialog should be visible with the expected heading
  await expect(page.locator('#consultation-form-title')).toBeVisible();
  await expect(page.locator('#consultation-form-title')).toHaveText(/Request a Private Design Consultation/i);
});
