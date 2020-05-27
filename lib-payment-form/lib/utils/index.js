"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cc_format = exports.validateCreditCardNumber = void 0;
var convertToNumber = function (inputText) {
    var arrValue = inputText.split(' '), value = arrValue.join('');
    return value;
};
/**
 * @typedef {Object} CardInfo
 * @property {string} card - Type of card (visa, mastercard, amexp, discover)
 * @property {boolean} ok - status of validation card number
 * @example
 * inputText numbers => {card: 'type', ok: true}
 * @param  {string} inputText
 * @returns {CardInfo}
 */
exports.validateCreditCardNumber = function (inputText) {
    var number = convertToNumber(inputText);
    var visaRegEx = /^4/, mastercardRegEx = /^(5[1-5])/;
    if (visaRegEx.test(number))
        return { card: 'visa', ok: true };
    if (mastercardRegEx.test(number))
        return { card: 'mastercard', ok: true };
    return { card: undefined, ok: false };
};
exports.cc_format = function (value) {
    var v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    var matches = v.match(/\d{4,16}/g);
    var match = (matches && matches[0]) || '';
    var parts = [];
    for (var i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
        return parts.join(' ');
    }
    else {
        return value;
    }
};
