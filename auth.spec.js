import { test, expect } from '@playwright/test';

test('TC-AUTH-101 Login with valid credentials', async ({ page }) => {
  await page.goto('/login');
  await page.fill('[name="email"]', 'test@test.com');
  await page.fill('[name="password"]', '123456');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/home/);
});

test('TC-AUTH-101-N Invalid login', async ({ page }) => {
  await page.goto('/login');
  await page.fill('[name="email"]', 'test@test.com');
  await page.fill('[name="password"]', 'wrong');
  await page.click('button[type="submit"]');
  await expect(page.locator('.error')).toBeVisible();
});

test('TC-AUTH-102 Logout', async ({ page }) => {
  await page.goto('/home');
  await page.click('text=Logout');
  await expect(page).toHaveURL(/login/);
});

test('TC-AUTH-103 Forgot password navigation', async ({ page }) => {
  await page.goto('/login');
  await page.click('text=Forgot Password');
  await expect(page).toHaveURL(/reset/);
});
