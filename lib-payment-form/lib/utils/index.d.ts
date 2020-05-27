/**
 * @typedef {Object} CardInfo
 * @property {string} card - Type of card (visa, mastercard, amexp, discover)
 * @property {boolean} ok - status of validation card number
 * @example
 * inputText numbers => {card: 'type', ok: true}
 * @param  {string} inputText
 * @returns {CardInfo}
 */
export declare const validateCreditCardNumber: (inputText: string) => {
    card: string;
    ok: boolean;
} | {
    card: undefined;
    ok: boolean;
};
export declare const cc_format: (value: string) => string;
