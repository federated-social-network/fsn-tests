import { test, expect } from '@playwright/test';

// test('TC-PROF-401 Update profile', async ({ page }) => {
//   await page.goto('/profile/edit');
//   await page.fill('#bio', 'New Bio');
//   await page.click('text=Save');
//   await page.reload();
//   await expect(page.locator('#bio')).toHaveValue('New Bio');
// });

test('TC-PROF-402 View profile', async ({ page }) => {
  await page.goto('/profile');
  await expect(page.locator('.profile-container')).toBeVisible();
});
