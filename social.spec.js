import { test, expect } from '@playwright/test';

test('TC-SOC-304 View pending requests', async ({ page }) => {
  await page.goto('/pending');
  await expect(page.locator('.request-item')).toBeVisible();
});
