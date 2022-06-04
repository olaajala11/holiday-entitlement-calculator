export default class Element {
    /**
     * Constructs an element based on selector
     *
     * @param {string} selector Element selector 
     */
    constructor(selector) {
        this.selector = selector;
    }

    /**
     * Clicks on an element
     */
    click() {
        cy.get(this.selector).click();
    }

    /**
     * Select an <option> within a <select> tag
     *
     * @param {string} value String value to select
     */
    selectByValue(value) {
        cy.get(this.selector).select(value);
    }

    /**
     * Check checkbox(es) or radio(s)
     * Note: This element must be an <input> with type checkbox or radio
     */
    check() {
        cy.get(this.selector).check();
    }

    /**
     * Type into a DOM element text field
     *
     * @param {string} text Text to be typed
     */
    type(text) {
        cy.get(this.selector).type(text);
    }

    /**
     * Obtains text from DOM element and yield wrapped object
     * 
     * @returns {string} Alias
     */
    getText(returnedText) {
        cy.get(this.selector).then(txt => {
            const text = txt.text();
        cy.wrap(text).as(returnedText)
        });
    }
}