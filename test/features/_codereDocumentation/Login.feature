Feature: Verify the user cannot login into the Codere app when providing invalid data

	@android
	Scenario: Verify the user cannot login with invalid credentials
		Given I proceed to Login into Codere app
		When I login with user "test-bloqueado1234" and password "ejercicioTecnico"
		Then I verify I am unable to login with invalid credentials