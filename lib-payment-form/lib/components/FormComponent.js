"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("./styles");
exports.default = (function (_a) {
    var formConfig = _a.formConfig;
    var setActiveCard = formConfig.setActiveCard, activeButton = formConfig.activeButton, validCardNumber = formConfig.validCardNumber, validExpiryDate = formConfig.validExpiryDate, validName = formConfig.validName, validCcv = formConfig.validCcv, handleChangeCardNumber = formConfig.handleChangeCardNumber, handleBlurCardNumber = formConfig.handleBlurCardNumber, handleChangeName = formConfig.handleChangeName, handleBlurName = formConfig.handleBlurName, handleChangeCcv = formConfig.handleChangeCcv, handleBlurCcv = formConfig.handleBlurCcv, handleChangeExpiryDate = formConfig.handleChangeExpiryDate, handleBlurExpiryDate = formConfig.handleBlurExpiryDate, dataInfo = formConfig.dataInfo;
    var cardChangeToFalse = function () { return setActiveCard(false); }, cardChangeToTrue = function () { return setActiveCard(true); };
    return (react_1.default.createElement(styles_1.Form, { activeForm: activeButton },
        react_1.default.createElement(styles_1.FormGroup, { valid: validCardNumber },
            react_1.default.createElement("label", { htmlFor: "number" }, "Card number"),
            react_1.default.createElement(styles_1.InputNumber, { maxLength: 19, minLength: 19, name: "number", autoComplete: "off", required: true, value: dataInfo.cardNumber, onBlur: handleBlurCardNumber, onChange: handleChangeCardNumber, onFocus: cardChangeToFalse }),
            validCardNumber === false && (react_1.default.createElement(styles_1.Error, null, "Please provide a valid card number"))),
        react_1.default.createElement(styles_1.FormGroup, { valid: validName },
            react_1.default.createElement("label", { htmlFor: "name" }, "Name on card"),
            react_1.default.createElement(styles_1.InputName, { name: "name", required: true, value: dataInfo.name, onBlur: handleBlurName, onChange: handleChangeName, onFocus: cardChangeToFalse }),
            validName === false && react_1.default.createElement(styles_1.Error, null, "Please provide a valid name")),
        react_1.default.createElement(styles_1.FormGroupFlex, null,
            react_1.default.createElement(styles_1.FormGroup, { valid: validExpiryDate },
                react_1.default.createElement("label", { htmlFor: "expiry" }, "Expiry date"),
                react_1.default.createElement(styles_1.InputDate, { name: "expiry", placeholder: "MM/YY", required: true, value: dataInfo.expiryDate, onBlur: handleBlurExpiryDate, onChange: handleChangeExpiryDate, onFocus: cardChangeToFalse }),
                validExpiryDate === false && (react_1.default.createElement(styles_1.Error, null, "Please provide a date, month and year"))),
            react_1.default.createElement(styles_1.FormGroup, { valid: validCcv },
                react_1.default.createElement("label", { htmlFor: "ccv" }, "CCV"),
                react_1.default.createElement(styles_1.InputCcv, { name: "ccv", value: dataInfo.ccv, required: true, onBlur: handleBlurCcv, onChange: handleChangeCcv, onFocus: cardChangeToTrue }),
                validCcv === false && react_1.default.createElement(styles_1.Error, null, "Please provide a right ccv"))),
        validCardNumber && validName && validExpiryDate && validCcv ? (react_1.default.createElement(styles_1.SendButton, null, "Send")) : (react_1.default.createElement(styles_1.SendButtonDisable, null, "Send"))));
});
