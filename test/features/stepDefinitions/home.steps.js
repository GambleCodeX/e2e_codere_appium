import {Given} from '@cucumber/cucumber';
import HomePage from '../../src/pages/home.page.js';
import AlertsPage from '../../src/pages/alerts.page.js';

Given(/^I proceed to Login into Codere app$/, async function () {
	await AlertsPage.acceptCookies();
	await HomePage.goToLoginPage();
});