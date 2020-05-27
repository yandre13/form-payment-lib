"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("./styles");
var visa = require('../img/logos/visa.png'), mastercard = require('../img/logos/mastercard.png'), sim = require('../img/sim.png');
var react_transition_group_1 = require("react-transition-group");
exports.default = (function (_a) {
    var cardConfig = _a.cardConfig;
    var activeCard = cardConfig.activeCard, activeButton = cardConfig.activeButton, setActiveCard = cardConfig.setActiveCard, setActiveButton = cardConfig.setActiveButton, kindOfCard = cardConfig.kindOfCard, dataInfo = cardConfig.dataInfo;
    var cardChangeToggle = function () { return setActiveCard(!activeCard); }, buttonChangeToggle = function () { return setActiveButton(!activeButton); };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        console.log(dataInfo),
        react_1.default.createElement(styles_1.Card, { className: "card", activeCard: activeCard, onClick: cardChangeToggle },
            react_1.default.createElement(styles_1.Front, null,
                react_1.default.createElement("div", { className: "logo" },
                    react_1.default.createElement(react_transition_group_1.SwitchTransition, null,
                        react_1.default.createElement(react_transition_group_1.CSSTransition, { key: kindOfCard === 'mastercard' ? 'mastercard' : 'visa', addEndListener: function (node, done) {
                                return node.addEventListener('transitionend', done, false);
                            }, classNames: "fade" },
                            react_1.default.createElement("img", { src: kindOfCard === 'mastercard' ? mastercard : visa, alt: "card" })))),
                react_1.default.createElement("img", { src: sim, alt: "sim" }),
                react_1.default.createElement("div", null,
                    react_1.default.createElement(styles_1.Group, { className: "number" },
                        react_1.default.createElement(styles_1.Label, null, "Card Number"),
                        react_1.default.createElement("p", null, dataInfo.cardNumber)),
                    react_1.default.createElement(styles_1.FlexBox, null,
                        react_1.default.createElement(styles_1.Group, { className: "name" },
                            react_1.default.createElement(styles_1.Label, null, "Card name"),
                            react_1.default.createElement("p", null, dataInfo.name.toUpperCase())),
                        react_1.default.createElement(styles_1.Group, { className: "exp" },
                            react_1.default.createElement(styles_1.Label, null, "Expiration"),
                            react_1.default.createElement("p", null, dataInfo.expiryDate))))),
            react_1.default.createElement(styles_1.Back, null,
                react_1.default.createElement(styles_1.MagBar, null),
                react_1.default.createElement(styles_1.Data, null,
                    react_1.default.createElement(styles_1.Group, { className: "signature" },
                        react_1.default.createElement(styles_1.Label, null, "Firma"),
                        react_1.default.createElement(styles_1.Signature, null,
                            react_1.default.createElement("p", null, dataInfo.name))),
                    react_1.default.createElement(styles_1.Group, { className: "ccv" },
                        react_1.default.createElement(styles_1.Label, null, "CCV"),
                        react_1.default.createElement("p", { className: "ccv" }, dataInfo.ccv))),
                react_1.default.createElement(styles_1.Legal, null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tempore."),
                react_1.default.createElement(styles_1.Legal, null, "www.interbank.pe"))),
        react_1.default.createElement(styles_1.ButtonContainer, { activeButton: activeButton, onClick: buttonChangeToggle },
            react_1.default.createElement("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M11 0C11.8284 0 12.5 0.671573 12.5 1.5V9.5L20.5 9.5C21.3284 9.5 22 10.1716 22 11C22 11.8284 21.3284 12.5 20.5 12.5L12.5 12.5V20.5C12.5 21.3284 11.8284 22 11 22C10.1716 22 9.5 21.3284 9.5 20.5L9.5 12.5L1.5 12.5C0.671573 12.5 -1.19209e-07 11.8284 0 11C1.19209e-07 10.1716 0.671573 9.5 1.5 9.5L9.5 9.5V1.5C9.5 0.671573 10.1716 0 11 0Z", fill: "white" })))));
});
