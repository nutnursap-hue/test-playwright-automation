import { test } from 'src/fixtures/fixtures';
import { MainPage } from 'pageObjects/MainPage';
import logger from 'src/utils/logger';

const SEARCH_QUERY = 'Trip';
const URL = process.env.BASE_URL!;

test.describe('The Blond Abroad - Main Navigation', () => {
  test.setTimeout(60000);

  test('01. Main Navigation', async ({ page }) => {
    logger.info('********** 01. Main Navigation **********');

    const mainPage = new MainPage(page);

    await test.step('0. Prepare test enviroment', async () => {
      logger.info('    0. Prepare test enviroment');

      await page.goto(URL);
      await mainPage.isMainPageOpened();

      logger.info('    Main Page is opened');
    });

    await test.step('1. Open about page', async () => {
      logger.info('    1. Open about page');

      await mainPage.aboutButton.click();
      await page.waitForURL('**/about-me-5/');

      logger.info('    About page is opened');
    });

    await test.step('2. Open blog page', async () => {
      logger.info('    2. Open blog page');

      await mainPage.blogButton.click();
      await page.waitForURL('**/travel-blog/');

      logger.info('    Blog page is opened');
    });

    await test.step('3. Open about page', async () => {
      logger.info('    3. Open about page');

      await mainPage.ligthRoomButton.click();
      await page.waitForURL('**/lightroom-presets-x-blonde-abroad/');

      logger.info('    Lightroom presets page is opened');
    });

    await test.step('4. Open press page', async () => {
      logger.info('    4. Open press page');

      await mainPage.pressButton.click();
      await page.waitForURL('**/press-portfolio/');

      logger.info('    About page is opened');
    });

    await test.step('6. Open contact page', async () => {
      logger.info('    6. Open contact page');

      await mainPage.contactButton.click();
      await mainPage.workWithMeButton.click();
      await page.waitForURL('**/contact/');

      logger.info('    Contact page is opened');
    });

    await test.step('7. Open FAQ page', async () => {
      logger.info('    7. Open FAQ page');

      await mainPage.faqButton.click();
      await page.waitForURL('**/faq/');

      logger.info('    FAQ page is opened');
    });
  });
});