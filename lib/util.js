"use strict";

exports.__esModule = true;
exports.paramStringFromObject = paramStringFromObject;

/**
 * paramStringFromObject
 */
function paramStringFromObject(object) {
  return Object.keys(object).reduce(function (accumulator, value, index) {
    return accumulator += "&" + value + "=" + object[value];
  }, '');
}