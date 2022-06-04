import Element from '../../support/element';

const fullLeaveYearOpt = new Element('input[value="full-year"]');
const startPartwayOpt = new Element('input[value="starting"]');
const leavePartwayOpt = new Element('input[value="leaving"]');
const startAndLeavePartwayOpt = new Element('input[value="starting-and-leaving"]');
const calculatePeriodContinueBtn = new Element('[data-question-key="calculation-period"] button');

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