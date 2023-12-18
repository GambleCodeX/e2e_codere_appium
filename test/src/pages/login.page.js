class LoginPage {

	get textFieldCredentials() { return $$('//android.widget.EditText'); }

	get btnAccess() { return $('//android.widget.Button[@resource-id="btnaccess"]'); }

	async login(user, password) {
		await this.textFieldCredentials[0].setValue(user);
		await this.textFieldCredentials[1].setValue(password);
		await this.btnAccess.click();
	}
}

export default new LoginPage();