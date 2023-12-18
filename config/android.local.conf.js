import {config} from './mobile.wdio.local.conf';
import path from 'path';

// Appium capabilities
config.capabilities = [
	{
		platformName: 'Android',
		maxInstances: 1,
		'appium:automationName': 'UIAutomator2',
		'appium:deviceName': 'Pixel 5 API 31',
		'appium:platformVersion': '12',
		'appium:app': path.resolve('./resources/app/Codere_ Apuestas Deportivas_4.4.apk'),
		'appium:noReset': 'false',
		'appium:fullReset': 'false',
		'appium:autoGrantPermissions': 'true',
		'appium:autoDismissAlerts': 'true',
		// 'appium:printPageSourceOnFindFailure': 'true'
	}
];

config.cucumberOpts.tagExpression = '@android'; // pass tag to run tests specific to android

exports.config = config;
