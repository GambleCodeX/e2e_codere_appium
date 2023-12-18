const timeouts = {
	// All timeouts here are in milliseconds
	S1: 1000,
	S2: 2000,
	S3: 3000,
	S5: 5000,
	S10: 10000,
	S15: 15000
};

class WaitHelper {

	/**
     * Wait for element to be displayed
     * @param {Element} element - element to check
     * @param {number} [timeout=timeouts.S15] - time to wait
     * @param {string} [message='ELEMENT DISPLAYED TIMEOUT ERROR'] - message to give on failure
     * @returns {Promise<void>}
     */
	async waitForDisplayed(element, timeout = timeouts.S15, message = 'ELEMENT DISPLAYED TIMEOUT ERROR') {
		await element.waitForDisplayed({
			timeout: timeout,
			timeoutMsg: `${message}. LOCATOR: ${element.selector} \n ${new Error().stack}`
		});
	}
}

module.exports = {
	timeouts,
	WaitHelper
};
