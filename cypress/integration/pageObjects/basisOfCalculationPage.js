import Element from '../../support/element';

const daysWorkedOpt = new Element('input[value="days-worked-per-week"]');
const basisOfCalculationContinueBtn = new Element('[data-question-key="basis-of-calculation"] button');

/**
 * Selects the option to calculate holiday entitlment based on number of days worked per week
 */
 export function selectDaysWorkedPerWeekOption() {
    daysWorkedOpt.check();
    basisOfCalculationContinueBtn.click();
}