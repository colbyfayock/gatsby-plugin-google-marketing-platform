/**
 * paramStringFromObject
 */

export function paramStringFromObject(object) {
  return Object.keys(object).reduce((accumulator, value, index) => {
    return accumulator += `&${value}=${object[value]}`;
  }, '');
}