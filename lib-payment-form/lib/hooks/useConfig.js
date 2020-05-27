"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var utils_1 = require("../utils");
var useConfig = function () {
    var _a = react_1.useState(false), activeCard = _a[0], setActiveCard = _a[1];
    var _b = react_1.useState(true), activeButton = _b[0], setActiveButton = _b[1], _c = react_1.useState(undefined), validCardNumber = _c[0], setValidCardNumber = _c[1], _d = react_1.useState(undefined), validExpiryDate = _d[0], setValidExpiryDate = _d[1], _e = react_1.useState(undefined), validName = _e[0], setValidName = _e[1], _f = react_1.useState(undefined), validCcv = _f[0], setValidCcv = _f[1], _g = react_1.useState(undefined), kindOfCard = _g[0], setKindOfCard = _g[1];
    var _h = react_1.useState(''), cardNumber = _h[0], setCardNumber = _h[1], _j = react_1.useState(''), name = _j[0], setName = _j[1], _k = react_1.useState(''), ccv = _k[0], setCcv = _k[1], _l = react_1.useState(''), expiryDate = _l[0], setExpiryDate = _l[1], dataInfo = {
        cardNumber: cardNumber,
        name: name,
        ccv: ccv,
        expiryDate: expiryDate,
    };
    var handleChangeCardNumber = function (e) {
        var value = e.currentTarget.value;
        var regexNumbers = /\d{1,4}\s?/;
        var regexSpace = /^(\s|\d\s|\d\d\s|\d\d\d\s)/;
        if (!regexSpace.test(value)) {
            if (value === '' || regexNumbers.test(value)) {
                setCardNumber(utils_1.cc_format(value));
                console.log(cardNumber);
                var card = utils_1.validateCreditCardNumber(cardNumber).card;
                if (card) {
                    setKindOfCard(card);
                }
                console.log(kindOfCard);
            }
        }
        if (!value) {
            setKindOfCard(undefined);
            setValidCardNumber(undefined);
        }
        value.length === 19 && setValidCardNumber(true);
    }, handleBlurCardNumber = function () {
        var regexCard = /(\d{4} *\d{4} *\d{4} *\d{4})/;
        var isValid = regexCard.test(cardNumber);
        cardNumber.length > 0
            ? setValidCardNumber(isValid)
            : setValidCardNumber(undefined);
    }, handleChangeName = function (e) {
        var value = e.currentTarget.value;
        var regexCharacters = /^[a-zñ]+\s?[a-zñ]?/i;
        var regexSpace = /^ /;
        if (!regexSpace.test(value)) {
            if (value === '' || regexCharacters.test(value)) {
                setName(value);
            }
        }
        !value && setValidName(undefined);
        if (/^[a-zñ]+\s[a-zñ]+$/i.test(value)) {
            setValidName(true);
        }
    }, handleBlurName = function (e) {
        var value = e.currentTarget.value;
        var regexName = /^[a-zñ]+\s[a-zñ]+$/i;
        value.length > 0
            ? setValidName(regexName.test(value))
            : setValidName(undefined);
    }, handleChangeCcv = function (e) {
        var value = e.currentTarget.value;
        var regexNumbers = /^[0-9]+$/;
        if (value === '' || regexNumbers.test(value)) {
            value.length < 4 && setCcv(value);
        }
        !value && setValidCcv(undefined);
        value.length === 3 && setValidCcv(true);
    }, handleBlurCcv = function (e) {
        var value = e.currentTarget.value;
        ccv.length === 3 ? setValidCcv(true) : setValidCcv(false);
        !value && setValidCcv(undefined);
    }, handleChangeExpiryDate = function (e) {
        var value = e.currentTarget.value;
        if (!/^\d{0,2}\/?\d{0,2}$/.test(value)) {
            return;
        }
        if (/^\d{3,}$/.test(value)) {
            value = value.match(new RegExp('.{1,2}', 'g')).join('/');
        }
        setExpiryDate(value);
        !value && setValidExpiryDate(undefined);
        value.length === 5 && setValidExpiryDate(true);
    }, handleBlurExpiryDate = function (e) {
        var value = e.currentTarget.value;
        var regexDate = /^(0[1-9]|1[0-2])\/\d{2}$/;
        value.length > 0
            ? setValidExpiryDate(regexDate.test(value))
            : setValidExpiryDate(undefined);
    }, cardConfig = {
        activeCard: activeCard,
        activeButton: activeButton,
        setActiveCard: setActiveCard,
        setActiveButton: setActiveButton,
        kindOfCard: kindOfCard,
        dataInfo: dataInfo,
    }, formConfig = {
        setActiveCard: setActiveCard,
        activeButton: activeButton,
        validCardNumber: validCardNumber,
        validExpiryDate: validExpiryDate,
        validName: validName,
        validCcv: validCcv,
        handleChangeCardNumber: handleChangeCardNumber,
        handleBlurCardNumber: handleBlurCardNumber,
        handleChangeName: handleChangeName,
        handleBlurName: handleBlurName,
        handleChangeCcv: handleChangeCcv,
        handleBlurCcv: handleBlurCcv,
        handleChangeExpiryDate: handleChangeExpiryDate,
        handleBlurExpiryDate: handleBlurExpiryDate,
        dataInfo: dataInfo,
    };
    return {
        cardConfig: cardConfig,
        formConfig: formConfig,
    };
};
exports.default = useConfig;
