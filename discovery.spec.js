import { test, expect } from '@playwright/test';

test('TC-DISC-501 Available users list', async ({ page }) => {
  await page.goto('/discover/users');
  await expect(page.locator('.user-card')).toBeVisible();
});

test('TC-DISC-502 Available instances list', async ({ page }) => {
  await page.goto('/discover/instances');
  await expect(page.locator('.instance-card')).toBeVisible();
});
