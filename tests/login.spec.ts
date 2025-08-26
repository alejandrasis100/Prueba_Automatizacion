import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { TestUsers } from '../utils/TestData';

test.describe('Login Tests', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.goto();
  });

  test('Successful login with standard_user and verify shopping cart icon', async ({ page }) => {
    // Verificar que la página de login está visible
    await loginPage.verifyLoginPageIsVisible();

    // Realizar login con credenciales válidas
    await loginPage.login(TestUsers.STANDARD_USER.username, TestUsers.STANDARD_USER.password);

    // Verificar que se redirige a la página de inventario
    await inventoryPage.verifyInventoryPageIsLoaded();

    // Verificar que el icono del carrito de compras está visible
    await inventoryPage.verifyShoppingCartIconIsVisible();

    // Verificar que los productos están cargados
    await inventoryPage.verifyInventoryItemsAreVisible();

    // Tomar screenshot para evidencia
    await page.screenshot({ path: 'test-results/successful-login.png', fullPage: true });
  });

  test('Verify shopping cart functionality after login', async ({ page }) => {
    // Login
    await loginPage.login(TestUsers.STANDARD_USER.username, TestUsers.STANDARD_USER.password);
    await inventoryPage.verifyInventoryPageIsLoaded();

    // Verificar que el carrito está vacío inicialmente
    const initialBadgeText = await inventoryPage.getShoppingCartBadgeText();
    expect(initialBadgeText).toBeNull();

    // Hacer clic en el carrito para verificar que es funcional
    await inventoryPage.clickShoppingCart();
    
    // Verificar que se navega a la página del carrito
    await expect(page).toHaveURL(/.*cart/);
  });

  test('Login page elements are visible', async ({ page }) => {
    await loginPage.verifyLoginPageIsVisible();
    
    // Verificar elementos específicos de la página de login
    await expect(page.locator('.login_wrapper')).toBeVisible();
    await expect(page.locator('.login_credentials')).toBeVisible();
  });
});