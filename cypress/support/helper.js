
/**
 * Converts the date in DD-MM-YYYY format
 *
 * @param {string} date Date in DD-MM-YYYY format
 *
 * @returns {object} day, month and year
 */
export function convertToDayMonthYear (date) {
    const dateArr = date.split('-')
    return {
        day: dateArr[0],
        month: dateArr[1],
        year: dateArr[2]
    }
}