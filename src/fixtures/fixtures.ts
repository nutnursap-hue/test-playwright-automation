import { test as base } from '@playwright/test';

const COOKIE_BANNER_ACCEPT_SELECTOR = 'span#cmpwelcomebtnyes.cmpboxbtnspan';

export const test = base.extend({
  page: async ({ page }, use) => {

    await page.addLocatorHandler(
      page.locator(COOKIE_BANNER_ACCEPT_SELECTOR),
      async () => {
        await page.locator(COOKIE_BANNER_ACCEPT_SELECTOR).click();
      }
    );

    await use(page);
  },
});

export { expect } from '@playwright/test';
