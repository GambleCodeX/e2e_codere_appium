class HomePage {

	get btnLogin() { return $('//android.widget.Button[@text="Acceder"]'); }

	async goToLoginPage() {
		await this.btnLogin.click();
	}
}

export default new HomePage();