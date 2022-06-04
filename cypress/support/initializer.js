import {navigateToBaseUrl} from "./navigationSteps";


/**
 * Set the browser cookie
 */
export function setBrowserCookie() {
    cy.setCookie('cookies_preferences_set', 'true');
    cy.reload();
    cy.title().should('eq', 'Calculate holiday entitlement - GOV.UK');
}

/**
 * Initialize test
 */
export function initTest() {
    navigateToBaseUrl();
    setBrowserCookie();
}