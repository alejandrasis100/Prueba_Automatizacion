import { Page, Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly inventoryContainer: Locator;
  readonly shoppingCartLink: Locator;
  readonly shoppingCartBadge: Locator;
  readonly menuButton: Locator;
  readonly inventoryItems: Locator;
  readonly pageTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryContainer = page.locator('.inventory_container');
    this.shoppingCartLink = page.locator('.shopping_cart_link');
    this.shoppingCartBadge = page.locator('.shopping_cart_badge');
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.inventoryItems = page.locator('.inventory_item');
    this.pageTitle = page.locator('.title');
  }

  async verifyInventoryPageIsLoaded() {
    await expect(this.inventoryContainer).toBeVisible();
    await expect(this.pageTitle).toHaveText('Products');
  }

  async verifyShoppingCartIconIsVisible() {
    await expect(this.shoppingCartLink).toBeVisible();
  }

  async verifyInventoryItemsAreVisible() {
    await expect(this.inventoryItems.first()).toBeVisible();
    const itemCount = await this.inventoryItems.count();
    expect(itemCount).toBeGreaterThan(0);
  }

  async clickShoppingCart() {
    await this.shoppingCartLink.click();
  }

  async getShoppingCartBadgeText() {
    if (await this.shoppingCartBadge.isVisible()) {
      return await this.shoppingCartBadge.textContent();
    }
    return null;
  }
}