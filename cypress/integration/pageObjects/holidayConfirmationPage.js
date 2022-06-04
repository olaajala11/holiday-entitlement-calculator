import Element from '../../support/element';
import Verifications from '../verifications';

const holidayResult = new Element('div.summary');

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