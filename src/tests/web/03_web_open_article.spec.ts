import { test, expect } from 'src/fixtures/fixtures';
import { MainPage } from 'pageObjects/MainPage';
import { NavigationBarPage } from 'pageObjects/NavigationBarPage';
import logger from 'src/utils/logger';

const URL = process.env.BASE_URL!;
const TRIP_TYPE = 'SOLO TRAVEL';

test.describe('The Blond Abroad - Filter by Trip Type Category', () => {
  test.setTimeout(60000);

  test('03. Filter articles by Trip Type category via navigation', async ({ page }) => {
    logger.info('********** 03. Filter articles by Trip Type category via navigation **********');

    const mainPage = new MainPage(page);
    const navigationBarPage = new NavigationBarPage(page);

    await test.step('0. Prepare test environment', async () => {
      logger.info('    0. Prepare test environment');

      await page.goto(URL);
      await mainPage.isMainPageOpened();

      logger.info('    Main Page is opened');
    });

    await test.step('1. Hover over "Type of Trip" in the navigation bar', async () => {
      logger.info('    1. Hover over "Type of Trip" in the navigation bar');

      await navigationBarPage.typeOfTripDropdown.hover();

      logger.info('    "Type of Trip" dropdown is hovered');
    });

    await test.step(`2. Click "${TRIP_TYPE}" from the sub-menu`, async () => {
      logger.info(`    2. Click "${TRIP_TYPE}" from the sub-menu`);

      await navigationBarPage.openTypeOfTripSubItem(TRIP_TYPE);

      logger.info(`    "${TRIP_TYPE}" category link is clicked`);
    });

    await test.step('3. Verify the category page is opened and contains articles', async () => {
      logger.info('    3. Verify the category page is opened and contains articles');

      await expect(page).toHaveURL(/solo-travel/);

      const articles = page.locator('article');
      await expect(articles.first()).toBeVisible();

      const count = await articles.count();
      expect(count).toBeGreaterThan(0);

      logger.info(`    Category page opened, ${count} article(s) visible`);
    });
  });
});
