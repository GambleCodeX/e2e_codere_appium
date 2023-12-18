import { timeouts, WaitHelper } from '../helpers/wait-helper.js';
const waitHelper = new WaitHelper();

class AlertsPage{

	get btnAcceptCookies() { return $('//android.app.Dialog/android.view.View/android.widget.Button'); }

	get alertUnauthorisedAccess() { return $('//android.view.View[@resource-id="alert-hdr-1"]'); }
	
	async acceptCookies() {
		await waitHelper.waitForDisplayed(this.btnAcceptCookies, timeouts.S10);
		await this.btnAcceptCookies.click();
	}

	async validateUnauthorisedAccessAlert() {
		const sessionError = 'ERROR DE INICIO DE SESIÓN';
		await waitHelper.waitForDisplayed(this.alertUnauthorisedAccess, timeouts.S5);
		await expect(await this.alertUnauthorisedAccess).toHaveText(sessionError);
	}
}

export default new AlertsPage();