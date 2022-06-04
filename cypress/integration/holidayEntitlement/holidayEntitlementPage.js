import Element from '../../support/element';
import Verifications from '../verifications';
import {convertToDayMonthYear} from '../../support/common'

const startNowBtn = new Element('.govuk-button--start');
const daysWorkedOpt = new Element('input[value="days-worked-per-week"]');
const fullLeaveYearOpt = new Element('input[value="full-year"]');
const startPartwayOpt = new Element('input[value="starting"]');
const leavePartwayOpt = new Element('input[value="leaving"]');
const startAndLeavePartwayOpt = new Element('input[value="starting-and-leaving"]');
const startDayField = new Element('[name="response[day]"]');
const startMonthField = new Element('[name="response[month]"]');
const startYearField = new Element('[name="response[year]"]');
const basisOfCalculationContinueBtn = new Element('[data-question-key="basis-of-calculation"] button');
const calculatePeriodContinueBtn = new Element('[data-question-key="calculation-period"] button');
const daysWorkedPerWeekTxtField = new Element('[data-question-key="how-many-days-per-week"] #response');
const daysWorkedPerWeekContinueBtn = new Element('[data-question-key="how-many-days-per-week"] button');
const startingDateContinueBtn = new Element('[data-question-key="what-is-your-starting-date"] button');
const leaveYearStartDateContinueBtn = new Element('[data-question-key="when-does-your-leave-year-start"] button');
const leavingDateContinueBtn = new Element('[data-question-key="what-is-your-leaving-date"] button');
const holidayResult = new Element('div.summary');
const daysWorkedErrorMsg = new Element('[data-question-key="how-many-days-per-week"] .govuk-error-message');

/**
 * Clicks on start button to calculate holiday entitlement
 */
export function clickOnStartNowButton() {
    startNowBtn.click();
}

/**
 * Selects the option to calculate holiday entitlment based on number of days worked per week
 */
export function basisOfDaysWorkedPerWeek() {
    daysWorkedOpt.check();
    basisOfCalculationContinueBtn.click();
}

/**
 * Selects the option to calculate statutory holiday for a full leave year
 */
export function selectFullLeaveYearOption() {
    fullLeaveYearOpt.check();
    calculatePeriodContinueBtn.click();
}

/**
 * Selects the option to calculate statutory holiday for starting part way through a leave year
 */
export function selectStartEmploymentPartwayOption() {
    startPartwayOpt.check();
    calculatePeriodContinueBtn.click();
}

/**
 * Selects the option to calculate statutory holiday for leaving part way through a leave year
 */
export function selectLeaveEmploymentPartwayOption() {
    leavePartwayOpt.check();
    calculatePeriodContinueBtn.click();
}

/**
 * Selects the option to calculate statutory holiday for starting and leaving part way through a leave year
 */
export function selectStartAndLeaveEmploymentPartwayOption() {
    startAndLeavePartwayOpt.check();
    calculatePeriodContinueBtn.click();
}

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
 * Enters employment date
 * 
 * @param {string} dateMonthYear Date in DD-MM-YYYY format
 * @param {string} dateType Starting, Leave year or End date
 */
export function enterEmploymentDate(dateMonthYear, dateType) {
    const date = dateType.toLowerCase();
    const {day, month, year} = convertToDayMonthYear(dateMonthYear);
    startDayField.type(day);
    startMonthField.type(month);
    startYearField.type(year);

    switch (date) {
        case 'startingdate':
            startingDateContinueBtn.click();
            break;
        case 'leaveyeardate':
            leaveYearStartDateContinueBtn.click();
            break;
        case 'enddate':
            leavingDateContinueBtn.click();
            break;
        default:
    }
}

/**
 * Verifies the statutory holiday entitlement in days
 *
 * @param {string} expectedHoliday Number of statutory holiday
 */
export function verifyStatutoryHoliday(expectedHoliday) {
    const numberOfHolidaysAlias = 'holidayAlias';
    holidayResult.getText(numberOfHolidaysAlias);

    cy.get(`@${numberOfHolidaysAlias}`).then(holiday => {
        const actualHoliday = holiday.split(' ')[5];
        Verifications.equal(actualHoliday, expectedHoliday)
    });
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