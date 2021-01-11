const { Given, When, Then } = require('cucumber');

const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage
}

Given(/^Estar en la homepage$/, async (page) => {
    await pages[page].open()
});

Given(/^Se accede al area de usuarios$/, async (page) => {
    await pages[page].open()
});

When(/^Se introduce usuario y contraseña $/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^Se accede a la cuenta$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

 