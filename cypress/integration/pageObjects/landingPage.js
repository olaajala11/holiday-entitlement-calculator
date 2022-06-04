import Element from '../../support/element';

const startNowBtn = new Element('.govuk-button--start');

/**
 * Clicks on start button to calculate holiday entitlement
 */
 export function clickOnStartNowButton() {
    startNowBtn.click();
}