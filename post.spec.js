import { test, expect } from '@playwright/test';

test('TC-CONT-201 Create post', async ({ page }) => {
  await page.goto('/home');
  await page.fill('#post-box', 'Hello World');
  await page.click('#submit-post');
  await expect(page.locator('.post')).toContainText('Hello World');
});
