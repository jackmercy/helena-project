import { PublicPage } from './public.po';
import { browser } from 'protractor';
import { protractor } from 'protractor';
const fs = require('fs');
describe('sign in testing', () => {
    let page: PublicPage;


    beforeEach(() => {
        browser.driver.manage().window().maximize();
        // browser.driver.manage().window().setSize(width, height);
        page = new PublicPage();
    });

    function writeScreenShot(data, filename) {
        const stream = fs.createWriteStream(filename);
        stream.write(new Buffer(data, 'base64'));
    }

    it('should display No user is found', () => {
        page.navigateTo();
        page.getInputUsername().sendKeys('asdfgh');
        page.getInputRole().sendKeys('123456');
        page.getSignInButton().click();
        expect(page.getSnackBar().getText()).toEqual('No user is found\nGot it');
        page.getSnackButton().click();
        browser.takeScreenshot().then(function(png) {
            writeScreenShot(png, './e2e/result/sign-in-error.jpg');
        });
    });

    it('should sign in to home page', () => {

        page.navigateTo();
        page.getInputUsername().sendKeys('Helena');
        page.getInputRole().sendKeys('master');
        expect(page.getSignInButton().isEnabled()).toBe(true);
        page.getSignInButton().click();
        browser.takeScreenshot().then(function(png) {
            expect(browser.getCurrentUrl()).toBe('http://localhost:49152/home/gift-card');
            writeScreenShot(png, './e2e/result/sign-in-success.jpg');
        });
    });


});
