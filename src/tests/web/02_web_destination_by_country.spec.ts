import { test } from 'src/fixtures/fixtures';
import { MainPage } from 'pageObjects/MainPage';
import { DestinationPage } from 'pageObjects/DestinationsPage';
import { NavigationBarPage } from 'pageObjects/NavigationBarPage';
import logger from 'src/utils/logger';

const URL = process.env.BASE_URL!;
const COUNTRY = 'AUSTRIA';

test.describe('The Blond Abroad - Destantions by country', () => {
  test.setTimeout(60000);

  test('02. Destanations by country', async ({ page }) => {
    logger.info('********** 02. Destantions by country **********');

    const destinationPage = new DestinationPage(page);
    const mainPage = new MainPage(page);
    const navigationBarPage = new NavigationBarPage(page);

    await test.step('0. Prepare test enviroment', async () => {
      logger.info('    0. Prepare test enviroment');

      await page.goto(URL);
      await mainPage.isMainPageOpened();

      logger.info('    Main Page is opened');
    });

    await test.step('1. Navigate to the Destination Page', async () => {
      logger.info('    1. Navigate to the Destination Page');

      await navigationBarPage.openDestinationsPage();

      logger.info('    Destinations Page is opened');
    });

    await test.step('2. Open the select option dropdown', async () => {
      logger.info('    2. Open the select option dropdown');

      await destinationPage.selectListDropdown.click();

      logger.info('    Dropdown is opened');
    });

    await test.step('Select an option from the dropdown and go to destination page', async () => {
      logger.info('    Select an option from the dropdown and go to destination page');

      await destinationPage.selectOption(COUNTRY);
      await destinationPage.isPageOpened(COUNTRY.toLowerCase());

      logger.info('    Page is opened');
    });

  });
});