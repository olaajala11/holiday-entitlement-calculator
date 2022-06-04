import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps';
import {initTest} from '../../support/initializer';
import * as holidayEntitlement from './holidayEntitlementPage';

Given('I am on holiday entitlement homepage', () => {
    initTest();
});

And('I proceed to calculate my holiday entitlement', () => {
    holidayEntitlement.clickOnStartNowButton();
});

And('I choose to calculate holiday entitlment based on number of days worked per week', () => {
    holidayEntitlement.basisOfDaysWorkedPerWeek();
});

When('I choose to work out my statutory holiday for a full leave year', () => {
    holidayEntitlement.selectFullLeaveYearOption();
});

When('I choose to work out my statutory holiday for starting part way through a leave year', () => {
    holidayEntitlement.selectStartEmploymentPartwayOption();
});

When('I choose to work out my statutory holiday for leaving part way through a leave year', () => {
    holidayEntitlement.selectLeaveEmploymentPartwayOption();
});

When('I choose to work out my statutory holiday for starting and leaving part way through a leave year', () => {
    holidayEntitlement.selectStartAndLeaveEmploymentPartwayOption();
});

And('I work {string} days a week', (numberOfDays) => {
    holidayEntitlement.enterDaysWorkedPerWeek(numberOfDays);
});

And('My employment start date is {string}', (startDate, dateType = 'startingDate') => {
    holidayEntitlement.enterEmploymentDate(startDate, dateType);
});

And('My employment end date is {string}', (endDate, dateType = 'endDate') => {
    holidayEntitlement.enterEmploymentDate(endDate, dateType);
});

And('My leave year start date is {string}', (leaveYearDate, dateType = 'leaveYearDate') => {
    holidayEntitlement.enterEmploymentDate(leaveYearDate, dateType);
});

Then('My statutory holiday entitlement should be {string} days holiday', (expectedHoliday) => {
    holidayEntitlement.verifyStatutoryHoliday(expectedHoliday)
});

Then('Error for invalid number of days per week should be displayed', () => {
    holidayEntitlement.displayInvalidDaysWorkedError();
});

