import {When, Then} from '@cucumber/cucumber';
import LoginPage from '../../src/pages/login.page.js';
import AlertsPage from '../../src/pages/alerts.page.js';

When(/^I login with user "([^"]*)" and password "([^"]*)"$/, async function (user,password) {
	await LoginPage.login(user, password);
});

Then(/^I verify I am unable to login with invalid credentials$/, async function () {
	await AlertsPage.validateUnauthorisedAccessAlert();
});