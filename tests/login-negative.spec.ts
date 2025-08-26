import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TestUsers, TestMessages } from '../utils/TestData';

test.describe('Login Negative Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('Login with locked out user', async ({ page }) => {
    await loginPage.login(TestUsers.LOCKED_OUT_USER.username, TestUsers.LOCKED_OUT_USER.password);
    await loginPage.verifyErrorMessage(TestMessages.LOCKED_OUT_ERROR);
  });

  test('Login with invalid credentials', async ({ page }) => {
    await loginPage.login('invalid_user', 'invalid_password');
    await loginPage.verifyErrorMessage(TestMessages.INVALID_CREDENTIALS);
  });

  test('Login with empty credentials', async ({ page }) => {
    await loginPage.login('', '');
    await loginPage.verifyErrorMessage('Epic sadface: Username is required');
  });
});