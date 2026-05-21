import type { Locator, Page } from '@playwright/test';
import logger from 'src/utils/logger';

export class DestinationPage {
  readonly page: Page;
  readonly destinationMap: Locator;
  readonly selectListDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.destinationMap = page.locator(".dest-map");
    this.selectListDropdown = page.locator("select[onchange='location = this.value;']");
  }

  async selectOption(option: string) {
    await this.selectListDropdown.selectOption({ label: option });
  }

  async isPageOpened(regUrl: string) {
    try {
      await this.page.waitForURL(`**/ultimate-${regUrl}-travel-guide/`);
      await this.page.waitForTimeout(500);
    } catch (error) {
      logger.error('    Second attempt to open destinations page');
      await this.page.waitForURL(`**/ultimate-${regUrl}-travel-guide/`);
      await this.page.waitForTimeout(500);
    }
  }
}