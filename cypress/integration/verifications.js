export class Verifications {

    /**
     * Assert that message is not empty
     * 
     * @param {string} message Message to not be empty
     */
    notToBeEmpty(message) {
        expect(message).not.to.be.empty;
    }

    /**
     * Assert that message is included
     * 
     * @param {string} message Complete message 
     * @param {string} includedMessage Message expected to be included
     */
    toInclude(message, includedMessage) {
        expect(message.toLowerCase().trim()).to.include(includedMessage.toLowerCase().trim());
    }

    /**
     * Assert that actualValue equals to expectedValue
     * 
     * @param {string | number} actualValue Message
     * @param {string | number} expectedValue Message
     */
    equal(actualValue, expectedValue) {
        if (typeof actualValue == 'number' && typeof expectedValue == 'number') {
            expect(actualValue).to.equal(expectedValue);
        }
        expect(actualValue.toLowerCase().trim()).to.equal(expectedValue.toLowerCase().trim());
    }

}

const instance = new Verifications();
export default instance;