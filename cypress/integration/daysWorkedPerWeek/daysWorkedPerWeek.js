import {When, And, Then} from 'cypress-cucumber-preprocessor/steps';
import {selectDaysWorkedPerWeekOption} from '../pageObjects/basisOfCalculationPage';
import * as calculationPeriod from '../pageObjects/calculationPeriodPage';
import {enterDaysWorkedPerWeek, displayInvalidDaysWorkedError} from '../pageObjects/daysWorkedPage';
import * as employmentDate from '../pageObjects/employmentDatePage';
import {verifyStatutoryHoliday} from '../pageObjects/holidayConfirmationPage';

And('I choose to calculate holiday entitlment based on number of days worked per week', () => {
    selectDaysWorkedPerWeekOption();
});

When('I choose to work out my statutory holiday for a full leave year', () => {
    calculationPeriod.selectFullLeaveYearOption();
});

When('I choose to work out my statutory holiday for starting part way through a leave year', () => {
    calculationPeriod.selectStartEmploymentPartwayOption();
});

When('I choose to work out my statutory holiday for leaving part way through a leave year', () => {
    calculationPeriod.selectLeaveEmploymentPartwayOption();
});

When('I choose to work out my statutory holiday for starting and leaving part way through a leave year', () => {
    calculationPeriod.selectStartAndLeaveEmploymentPartwayOption();
});

And('I work {string} days a week', (numberOfDays) => {
    enterDaysWorkedPerWeek(numberOfDays);
});

And('My employment start date is {string}', (startDate, dateType = 'startingDate') => {
    employmentDate.enterDate(startDate, dateType);
});

And('My employment end date is {string}', (endDate, dateType = 'endDate') => {
    employmentDate.enterDate(endDate, dateType);
});

And('My leave year start date is {string}', (leaveYearDate, dateType = 'leaveYearDate') => {
    employmentDate.enterDate(leaveYearDate, dateType);
});

Then('My statutory holiday entitlement should be {string} days holiday', (expectedHoliday) => {
    verifyStatutoryHoliday(expectedHoliday)
});

Then('Error for invalid number of days per week should be displayed', () => {
    displayInvalidDaysWorkedError();
});

