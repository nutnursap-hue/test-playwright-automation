import { test } from 'src/fixtures/fixtures';
import { MainPage } from 'pageObjects/MainPage';
import { NavigationBarPage } from 'pageObjects/NavigationBarPage';
import { StartPage } from 'pageObjects/StartPage';
import { generateRandomEmail, generateRandomString } from 'src/utils/valueGenerator';
import logger from 'src/utils/logger';

const URL = process.env.BASE_URL!;
const NAME = generateRandomString();
const EMAIL = generateRandomEmail();


test.describe('The Blond Abroad - Subscribe to Newsletter', () => {
  test.setTimeout(60000);

  test('05. Subscribe to Newsletter', async ({ page }) => {
    logger.info('********** 05. Subscribe to NewsletterSubscribe to Newsletters **********');

    const mainPage = new MainPage(page);
    const navigationBarPage = new NavigationBarPage(page);
    const startPage = new StartPage(page);

    await test.step('0. Prepare test environment', async () => {
      logger.info('    0. Prepare test environment');

      await page.goto(URL);
      await mainPage.isMainPageOpened();

      logger.info('    Main Page is opened');
    });

    await test.step('1. Open the Start Page', async () => {
      logger.info('    1. Open the Start Page');
      
      await navigationBarPage.openStartPage();

      logger.info('    Start Page is opened');
    });

    await test.step('2. Fill the name and email fields', async () => {
      logger.info('    2. Fill the name and email fields');

      await startPage.fillTheSubscriptionForm(NAME, EMAIL);

      logger.info('    Fields are filled');
    });

    await test.step('3. Submit the form', async () => {
      logger.info('    3. Submit the form');

      await startPage.subscribeButton.click();
      /// Не могу провести проверку выполнения формы из-за капчи
      /// Can't verify if the form has been submited duo captcha
      ///await startPage.isFormHasSubmited();
      ///
      logger.info('    Form is submitted');
    });
  });
});