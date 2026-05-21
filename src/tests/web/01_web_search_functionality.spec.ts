import { test } from 'src/fixtures/fixtures';
import { MainPage } from 'pageObjects/MainPage';
import logger from 'src/utils/logger';

const SEARCH_QUERY = 'Trip';
const URL = process.env.BASE_URL!;

test.describe('The Blond Abroad - Search Functionality', () => {
  test.setTimeout(60000);

  test('01. Search Functionality', async ({ page }) => {
    logger.info('********** 01. Search Functionality **********');

    const mainPage = new MainPage(page);

    await test.step('0. Prepare test enviroment', async () => {
      logger.info('    0. Prepare test enviroment');

      await page.goto(URL);
      await mainPage.isMainPageOpened();

      logger.info('    Main Page is opened');
    });

    await test.step('1. Search for a query', async () => {
      logger.info('    1. Search for a query');

      await mainPage.searchQuery(SEARCH_QUERY);

      logger.info('    Search results are opened');
    });

    await test.step('2. Verify search results', async () => {
      logger.info('    2. Verify search results');

      await mainPage.isSearchPageOpened(SEARCH_QUERY, URL);

      logger.info('    Search results are opened');
    });
  });
});