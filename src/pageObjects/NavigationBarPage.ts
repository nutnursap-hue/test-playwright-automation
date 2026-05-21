import type { Locator, Page } from '@playwright/test';
import logger from 'src/utils/logger';

export class NavigationBarPage {
  readonly page: Page;
  readonly navigationBar: Locator;
  readonly homeButton: Locator;
  readonly startHereButton: Locator;
  readonly destinationButton: Locator;
  readonly packingGuidesButton: Locator;
  readonly typeOfTripDropdown: Locator;
  readonly lifeStyleDropdown: Locator;
  readonly photographyButton: Locator;
  readonly travelShopButton: Locator;
  readonly resourcesDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigationBar = page.locator("#mega-menu-wrap-secondary");
    this.homeButton = page.locator("#mega-menu-secondary > li:nth-child(1)");
    this.startHereButton = page.locator("#mega-menu-secondary > li:nth-child(2)");
    this.destinationButton = page.locator("#mega-menu-secondary > li:nth-child(3)");
    this.packingGuidesButton = page.locator("#mega-menu-secondary > li:nth-child(4)");
    this.typeOfTripDropdown = page.locator("#mega-menu-secondary > li:nth-child(5)");
    this.lifeStyleDropdown = page.locator("#mega-menu-secondary > li:nth-child(6)");
    this.photographyButton = page.locator("#mega-menu-secondary > li:nth-child(7)");
    this.travelShopButton = page.locator("#mega-menu-secondary > li:nth-child(8)");
    this.resourcesDropdown = page.locator("#mega-menu-secondary > li:nth-child(9)");
  }

  async openHomePage(url: string): Promise<void> {
    try {
      await this.homeButton.click();
      await this.page.waitForURL(url);
      await this.page.waitForTimeout(500);
    } catch (error) {
      logger.error('    Second attempt to open payouts page');
      await this.homeButton.click();
      await this.page.waitForURL(url);
      await this.page.waitForTimeout(500);
    }
  }

  async openStartPage(): Promise<void> {
    try {
      await this.startHereButton.click();
      await this.page.waitForURL('**/start-here/')
      await this.page.waitForTimeout(100);
    } catch (error) {
      await this.startHereButton.click();
      await this.page.waitForURL('**/start-here/')
      await this.page.waitForTimeout(100);
    }
  }

  async openDestinationsPage(): Promise<void> {
    try {
      await this.destinationButton.click();
      await this.page.waitForURL('**/destinations/')
      await this.page.waitForTimeout(100);
    } catch (error) {
      await this.destinationButton.click();
      await this.page.waitForURL('**/destinations/')
      await this.page.waitForTimeout(100);
    }
  }

  async openPackingGuidesPage(): Promise<void> {
    try {
      await this.packingGuidesButton.click();
      await this.page.waitForURL('**/packing-guides/');
      await this.page.waitForTimeout(100);
    } catch (error) {
      await this.packingGuidesButton.click();
      await this.page.waitForURL('**/packing-guides/');
      await this.page.waitForTimeout(100);
    }
  }

  async openPhotographyPage(): Promise<void> {
    try {
      await this.packingGuidesButton.click();
      await this.page.waitForURL('**/photography/');
      await this.page.waitForTimeout(100);
    } catch (error) {
      await this.packingGuidesButton.click();
      await this.page.waitForURL('**/photography/');
      await this.page.waitForTimeout(100);
    }
  }

  async openTravelShopPage(): Promise<void> {
    try {
      await this.packingGuidesButton.click();
      await this.page.waitForURL('**/travel-shop/');
      await this.page.waitForTimeout(100);
    } catch (error) {
      await this.packingGuidesButton.click();
      await this.page.waitForURL('**/travel-shop/');
      await this.page.waitForTimeout(100);
    }
  }

  async openTypeOfTripSubItem(itemText: string): Promise<void> {
    await this.typeOfTripDropdown.hover();
    const subLink = this.typeOfTripDropdown.locator(`a:has-text("${itemText}")`);
    await subLink.waitFor({ state: 'visible' });
    await subLink.click();
  }
}