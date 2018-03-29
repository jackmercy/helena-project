import { browser, element, by } from 'protractor';

export class PublicPage {
    navigateTo() {
      // Navigate to the home page of the app
      return browser.get('/');
    }

    getInputUsername() {
        return element(by.css('#input-user'));
    }

    getInputRole() {
        return element(by.css('#input-role'));
    }

    getSignInButton() {
      return element(by.css('#sign-in-btn'));
    }

    getSnackBar() {
        return element(by.className('mat-simple-snackbar'));
    }

    getSnackButton() {
        return element(by.className('mat-simple-snackbar-action'));
    }
    /* selectNextKey() {
    browser.actions().sendKeys(Key.ARROW_RIGHT).perform();
    } */
}
