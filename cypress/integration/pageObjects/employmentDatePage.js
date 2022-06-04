import Element from '../../support/element';
import {convertToDayMonthYear} from '../../support/helper'

const startDayField = new Element('[name="response[day]"]');
const startMonthField = new Element('[name="response[month]"]');
const startYearField = new Element('[name="response[year]"]');
const startingDateContinueBtn = new Element('[data-question-key="what-is-your-starting-date"] button');
const leaveYearStartDateContinueBtn = new Element('[data-question-key="when-does-your-leave-year-start"] button');
const leavingDateContinueBtn = new Element('[data-question-key="what-is-your-leaving-date"] button');

/**
 * Enters employment date
 * 
 * @param {string} dateMonthYear Date in DD-MM-YYYY format
 * @param {string} dateType Starting, Leave year or End date
 */
 export function enterDate(dateMonthYear, dateType) {
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