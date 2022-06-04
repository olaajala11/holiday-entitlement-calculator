import Element from '../../support/element';
import Verifications from '../verifications';

const daysWorkedErrorMsg = new Element('[data-question-key="how-many-days-per-week"] .govuk-error-message');
const daysWorkedPerWeekTxtField = new Element('[data-question-key="how-many-days-per-week"] #response');
const daysWorkedPerWeekContinueBtn = new Element('[data-question-key="how-many-days-per-week"] button');

/**
 * Enters the number of days worked per week
 * 
 * @param {string} numberOfDays No of days worked
 */
 export function enterDaysWorkedPerWeek(numberOfDays) {
    daysWorkedPerWeekTxtField.type(numberOfDays);
    daysWorkedPerWeekContinueBtn.click();
}

/**
 * Verifies the expected error message when an invalid number of days worked is entered
 */
export function displayInvalidDaysWorkedError() {
    const errorMsgAlias = 'errorMsgAlias';
    daysWorkedErrorMsg.getText(errorMsgAlias);

    cy.get(`@${errorMsgAlias}`).then(errMsg => {
        const expErrorMsg = 'There are only 7 days in a week';
        Verifications.notToBeEmpty(errMsg);
        Verifications.toInclude(errMsg, expErrorMsg);
    });
}