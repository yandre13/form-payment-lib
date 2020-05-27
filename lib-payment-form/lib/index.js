/* eslint-disable */
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var calendar = require('./img/icons/calendar.svg'), crediCard = require('./img/icons/credit-card.svg'), user = require('./img/icons/user.svg'), lock = require('./img/icons/lock.svg');
var ButtonContainer = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 44px;\n\theight: 44px;\n\tbackground: #2364d2;\n\tposition: relative;\n\ttop: -25px;\n\tborder: none;\n\tborder-radius: 50%;\n\tz-index: 20;\n\tbox-shadow: -5px 4px 8px rgba(24, 56, 182, 0.4);\n\tcursor: pointer;\n\ttransition: all 0.4s ease;\n\ttransform: ", ";\n\t:focus {\n\t\toutline: none;\n\t\tborder: 0;\n\t}\n\t:hover {\n\t\tbackground: #1850b1;\n\t}\n"], ["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 44px;\n\theight: 44px;\n\tbackground: #2364d2;\n\tposition: relative;\n\ttop: -25px;\n\tborder: none;\n\tborder-radius: 50%;\n\tz-index: 20;\n\tbox-shadow: -5px 4px 8px rgba(24, 56, 182, 0.4);\n\tcursor: pointer;\n\ttransition: all 0.4s ease;\n\ttransform: ", ";\n\t:focus {\n\t\toutline: none;\n\t\tborder: 0;\n\t}\n\t:hover {\n\t\tbackground: #1850b1;\n\t}\n"])), function (props) { return props.activeButton && 'rotate(45deg)'; });
var Wrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tposition: relative;\n\twidth: 80%;\n\tmax-width: 1000px;\n\tpadding: 40px 20px;\n\tmargin: auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground: #ccc;\n\talign-items: center;\n\t.modal {\n\t}\n"], ["\n\tposition: relative;\n\twidth: 80%;\n\tmax-width: 1000px;\n\tpadding: 40px 20px;\n\tmargin: auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground: #ccc;\n\talign-items: center;\n\t.modal {\n\t}\n"])));
var Card = styled.article(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\twidth: 100%;\n\tmax-width: 344px;\n\tposition: relative;\n\tcolor: #fff;\n\ttransition: 0.6s ease all;\n\ttransform: rotateY(0deg);\n\ttransform-style: preserve-3d;\n\tcursor: pointer;\n\tz-index: 10;\n\ttransform: ", ";\n\t& > div {\n\t\tbackground-color: #0b6ab1;\n\t\tpadding: 18px;\n\t\tborder-radius: 14px;\n\t\tmin-height: 206px;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: space-between;\n\t\tbox-shadow: 0 10px 10px 0 rgba(90, 116, 148, 0.3);\n\t}\n"], ["\n\twidth: 100%;\n\tmax-width: 344px;\n\tposition: relative;\n\tcolor: #fff;\n\ttransition: 0.6s ease all;\n\ttransform: rotateY(0deg);\n\ttransform-style: preserve-3d;\n\tcursor: pointer;\n\tz-index: 10;\n\ttransform: ", ";\n\t& > div {\n\t\tbackground-color: #0b6ab1;\n\t\tpadding: 18px;\n\t\tborder-radius: 14px;\n\t\tmin-height: 206px;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: space-between;\n\t\tbox-shadow: 0 10px 10px 0 rgba(90, 116, 148, 0.3);\n\t}\n"])), function (props) { return props.activeCard && 'rotateY(180deg)'; });
var Front = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\twidth: 100%;\n\tbackface-visibility: hidden;\n\tbackground-image: linear-gradient(45deg, #0b6ab1 0%, #26d886 100%);\n\t& .logo {\n\t\ttext-align: right;\n\t\tmin-height: 30px;\n\t\timg {\n\t\t\twidth: 100%;\n\t\t\tmax-width: 58px;\n\t\t\theight: 90%;\n\t\t\tmin-height: 36px;\n\t\t\tobject-fit: cover;\n\t\t}\n\t}\n\t& > img {\n\t\tposition: relative;\n\t\ttop: -6px;\n\t\twidth: 100%;\n\t\tmax-width: 40px;\n\t\tmargin-bottom: 6px;\n\t}\n"], ["\n\twidth: 100%;\n\tbackface-visibility: hidden;\n\tbackground-image: linear-gradient(45deg, #0b6ab1 0%, #26d886 100%);\n\t& .logo {\n\t\ttext-align: right;\n\t\tmin-height: 30px;\n\t\timg {\n\t\t\twidth: 100%;\n\t\t\tmax-width: 58px;\n\t\t\theight: 90%;\n\t\t\tmin-height: 36px;\n\t\t\tobject-fit: cover;\n\t\t}\n\t}\n\t& > img {\n\t\tposition: relative;\n\t\ttop: -6px;\n\t\twidth: 100%;\n\t\tmax-width: 40px;\n\t\tmargin-bottom: 6px;\n\t}\n"])));
var Label = styled.p(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\tfont-size: 0.9rem;\n\tcolor: #fff;\n"], ["\n\tfont-size: 0.9rem;\n\tcolor: #fff;\n"])));
var Legal = styled.p(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\tfont-size: 0.8rem;\n\tline-height: 1rem;\n\tcolor: ", ";\n"], ["\n\tfont-size: 0.8rem;\n\tline-height: 1rem;\n\tcolor: ", ";\n"])), function (props) { return (props.color ? '#2364d2;' : '#f2f2f2'); });
var FlexBox = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n"], ["\n\tdisplay: flex;\n\tjustify-content: space-between;\n"])));
var Group = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\t&.name {\n\t\tmax-width: 240px;\n\t\twidth: 100%;\n\t}\n\t& p {\n\t\toverflow: hidden;\n\t\tmax-width: 100%;\n\t\tfont-size: 0.9rem;\n\t\tline-height: 20px;\n\t\theight: 20px;\n\t}\n\t&.number {\n\t\tmargin-bottom: 6px;\n\t}\n\t&.signature {\n\t\twidth: 70%;\n\t}\n\t&.ccv {\n\t\twidth: 20%;\n\t\t> .ccv {\n\t\t\tbackground: #fff;\n\t\t\theight: 30px;\n\t\t\tline-height: 10px;\n\t\t\tcolor: #000;\n\t\t\tpadding: 10px;\n\t\t\ttext-align: center;\n\t\t}\n\t}\n"], ["\n\t&.name {\n\t\tmax-width: 240px;\n\t\twidth: 100%;\n\t}\n\t& p {\n\t\toverflow: hidden;\n\t\tmax-width: 100%;\n\t\tfont-size: 0.9rem;\n\t\tline-height: 20px;\n\t\theight: 20px;\n\t}\n\t&.number {\n\t\tmargin-bottom: 6px;\n\t}\n\t&.signature {\n\t\twidth: 70%;\n\t}\n\t&.ccv {\n\t\twidth: 20%;\n\t\t> .ccv {\n\t\t\tbackground: #fff;\n\t\t\theight: 30px;\n\t\t\tline-height: 10px;\n\t\t\tcolor: #000;\n\t\t\tpadding: 10px;\n\t\t\ttext-align: center;\n\t\t}\n\t}\n"])));
var Back = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n\tbackface-visibility: hidden;\n\tbackground-image: linear-gradient(-45deg, #0b6ab1 0%, #26d886 100%);\n\tposition: absolute;\n\ttop: 0;\n\ttransform: rotateY(180deg);\n\tbackface-visibility: hidden;\n"], ["\n\tbackface-visibility: hidden;\n\tbackground-image: linear-gradient(-45deg, #0b6ab1 0%, #26d886 100%);\n\tposition: absolute;\n\ttop: 0;\n\ttransform: rotateY(180deg);\n\tbackface-visibility: hidden;\n"])));
var MagBar = styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n\theight: 36px;\n\twidth: 100%;\n\tbackground: #000;\n\tposition: absolute;\n\ttop: 20px;\n\tleft: 0;\n"], ["\n\theight: 36px;\n\twidth: 100%;\n\tbackground: #000;\n\tposition: absolute;\n\ttop: 20px;\n\tleft: 0;\n"])));
var Data = styled.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n\tmargin-top: 44px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\t& p {\n\t\tmargin-bottom: 5px;\n\t}\n"], ["\n\tmargin-top: 44px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\t& p {\n\t\tmargin-bottom: 5px;\n\t}\n"])));
var Signature = styled.div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n\twidth: 100%;\n\theight: 30px;\n\tbackground: repeating-linear-gradient(\n\t\tskyblue 0,\n\t\tskyblue 5px,\n\t\torange 5px,\n\t\torange 10px\n\t);\n\t& > p {\n\t\toverflow: hidden;\n\t\tmax-width: 100%;\n\t\theight: 100%;\n\t\tline-height: 30px;\n\t\tfont-family: Georgia, 'Times New Roman', Times, serif;\n\t\tcolor: #000;\n\t\tfont-size: 1.4rem;\n\t\tpadding: 0 10px;\n\t\ttext-transform: capitalize;\n\t\tword-break: break-all;\n\t}\n"], ["\n\twidth: 100%;\n\theight: 30px;\n\tbackground: repeating-linear-gradient(\n\t\tskyblue 0,\n\t\tskyblue 5px,\n\t\torange 5px,\n\t\torange 10px\n\t);\n\t& > p {\n\t\toverflow: hidden;\n\t\tmax-width: 100%;\n\t\theight: 100%;\n\t\tline-height: 30px;\n\t\tfont-family: Georgia, 'Times New Roman', Times, serif;\n\t\tcolor: #000;\n\t\tfont-size: 1.4rem;\n\t\tpadding: 0 10px;\n\t\ttext-transform: capitalize;\n\t\tword-break: break-all;\n\t}\n"])));
var Form = styled.form(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n\tbackground: #fff;\n\twidth: 100%;\n\tmax-width: 406px;\n\tpadding: 108px 30px 30px;\n\tborder-radius: 16px;\n\tposition: relative;\n\ttop: -120px;\n\tz-index: 1;\n\ttransition: all 0.4s ease-out;\n\tclip-path: polygon(0 0, 100% 0, 100% 0, 0 0);\n\tclip-path: ", ";\n"], ["\n\tbackground: #fff;\n\twidth: 100%;\n\tmax-width: 406px;\n\tpadding: 108px 30px 30px;\n\tborder-radius: 16px;\n\tposition: relative;\n\ttop: -120px;\n\tz-index: 1;\n\ttransition: all 0.4s ease-out;\n\tclip-path: polygon(0 0, 100% 0, 100% 0, 0 0);\n\tclip-path: ",
    ";\n"])), function (props) {
    return props.activeForm && 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
});
var FormGroup = styled.div(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n\t& label {\n\t\tdisplay: block;\n\t\tcolor: #7d8994;\n\t\tfont-size: 0.9rem;\n\t}\n\t& input {\n\t\tborder: 1px solid #ced6e0;\n\t\tfont-size: 0.9rem;\n\t\theight: 32px;\n\t\twidth: 100%;\n\t\tpadding: 6px 12px 6px 34px;\n\t\tmargin-bottom: 12px;\n\t\ttransition: 0.4s ease all;\n\t\tborder-radius: 4px;\n\t\t", ";\n\t\t", ";\n\t\t:focus {\n\t\t\toutline: rgba(4, 4, 4, 0.5);\n\t\t\tborder: 1.3px solid #93bded;\n\t\t\tbox-shadow: 0px 0px 4px #93bded;\n\t\t}\n\t}\n"], ["\n\t& label {\n\t\tdisplay: block;\n\t\tcolor: #7d8994;\n\t\tfont-size: 0.9rem;\n\t}\n\t& input {\n\t\tborder: 1px solid #ced6e0;\n\t\tfont-size: 0.9rem;\n\t\theight: 32px;\n\t\twidth: 100%;\n\t\tpadding: 6px 12px 6px 34px;\n\t\tmargin-bottom: 12px;\n\t\ttransition: 0.4s ease all;\n\t\tborder-radius: 4px;\n\t\t",
    ";\n\t\t",
    ";\n\t\t:focus {\n\t\t\toutline: rgba(4, 4, 4, 0.5);\n\t\t\tborder: 1.3px solid #93bded;\n\t\t\tbox-shadow: 0px 0px 4px #93bded;\n\t\t}\n\t}\n"])), function (props) {
    return props.valid && css(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n\t\t\t\tborder: 1px solid #27ae60 !important;\n\t\t\t\tbox-shadow: 0px 0px 2px #27ae60;\n\t\t\t"], ["\n\t\t\t\tborder: 1px solid #27ae60 !important;\n\t\t\t\tbox-shadow: 0px 0px 2px #27ae60;\n\t\t\t"])));
}, function (props) {
    return props.valid === false && css(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n\t\t\t\tborder: 1px solid #e74c3c !important;\n\t\t\t\tbox-shadow: 0px 0px 2px #e74c3c;\n\t\t\t"], ["\n\t\t\t\tborder: 1px solid #e74c3c !important;\n\t\t\t\tbox-shadow: 0px 0px 2px #e74c3c;\n\t\t\t"])));
});
var FormGroupFlex = styled.div(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tdiv:first-child {\n\t\tmargin-right: 8px;\n\t\twidth: 50%;\n\t}\n\tdiv:nth-child(2) {\n\t\twidth: 50%;\n\t\tmargin-left: 8px;\n\t}\n"], ["\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tdiv:first-child {\n\t\tmargin-right: 8px;\n\t\twidth: 50%;\n\t}\n\tdiv:nth-child(2) {\n\t\twidth: 50%;\n\t\tmargin-left: 8px;\n\t}\n"])));
var SendButton = styled.button(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n\tborder: none;\n\tborder-radius: 6px;\n\twidth: 100%;\n\tmargin-top: 12px;\n\theight: 32px;\n\tfont-size: 0.9rem;\n\tcolor: #fff;\n\tcursor: pointer;\n\tbackground: #2364d2;\n\t:hover {\n\t\tbackground: #1850b1;\n\t\tbox-shadow: 0px 0px 4px #93bded;\n\t}\n\t:focus {\n\t\toutline: rgba(4, 4, 4, 0.5);\n\t\tbox-shadow: 0px 0px 6px #93bded;\n\t}\n"], ["\n\tborder: none;\n\tborder-radius: 6px;\n\twidth: 100%;\n\tmargin-top: 12px;\n\theight: 32px;\n\tfont-size: 0.9rem;\n\tcolor: #fff;\n\tcursor: pointer;\n\tbackground: #2364d2;\n\t:hover {\n\t\tbackground: #1850b1;\n\t\tbox-shadow: 0px 0px 4px #93bded;\n\t}\n\t:focus {\n\t\toutline: rgba(4, 4, 4, 0.5);\n\t\tbox-shadow: 0px 0px 6px #93bded;\n\t}\n"])));
var SendButtonDisable = styled.button(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n\tborder: none;\n\tborder-radius: 6px;\n\twidth: 100%;\n\tmargin-top: 12px;\n\theight: 32px;\n\tfont-size: 0.9rem;\n\tcolor: #fff;\n\tcursor: not-allowed;\n\tbackground: #9fb1aa;\n"], ["\n\tborder: none;\n\tborder-radius: 6px;\n\twidth: 100%;\n\tmargin-top: 12px;\n\theight: 32px;\n\tfont-size: 0.9rem;\n\tcolor: #fff;\n\tcursor: not-allowed;\n\tbackground: #9fb1aa;\n"])));
var InputNumber = styled.input(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n\tbackground: url(", ");\n\tbackground-repeat: no-repeat;\n\tbackground-size: 20px;\n\tbackground-position: 8px center;\n"], ["\n\tbackground: url(", ");\n\tbackground-repeat: no-repeat;\n\tbackground-size: 20px;\n\tbackground-position: 8px center;\n"])), crediCard);
var InputName = styled.input(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n\tbackground: url(", ");\n\tbackground-repeat: no-repeat;\n\tbackground-size: 18px;\n\tbackground-position: 8px center;\n"], ["\n\tbackground: url(", ");\n\tbackground-repeat: no-repeat;\n\tbackground-size: 18px;\n\tbackground-position: 8px center;\n"])), user);
var InputDate = styled.input(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n\tbackground: url(", ");\n\tbackground-repeat: no-repeat;\n\tbackground-size: 18px;\n\tbackground-position: 8px center;\n"], ["\n\tbackground: url(", ");\n\tbackground-repeat: no-repeat;\n\tbackground-size: 18px;\n\tbackground-position: 8px center;\n"])), calendar);
var InputCcv = styled.input(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n\tbackground: url(", ");\n\tbackground-repeat: no-repeat;\n\tbackground-size: 18px;\n\tbackground-position: 8px center;\n"], ["\n\tbackground: url(", ");\n\tbackground-repeat: no-repeat;\n\tbackground-size: 18px;\n\tbackground-position: 8px center;\n"])), lock);
var Modal = styled.div(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n\tposition: absolute;\n\twidth: 90%;\n\tmax-width: 346px;\n\theight: 320px;\n\tbackground: #fff;\n\tborder-radius: 12px;\n\ttop: 20%;\n\tbox-shadow: 0px 0px 26px #9e9e9e;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 40px;\n\tz-index: 200;\n"], ["\n\tposition: absolute;\n\twidth: 90%;\n\tmax-width: 346px;\n\theight: 320px;\n\tbackground: #fff;\n\tborder-radius: 12px;\n\ttop: 20%;\n\tbox-shadow: 0px 0px 26px #9e9e9e;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 40px;\n\tz-index: 200;\n"])));
var Error = styled.small(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n\tdisplay: block;\n\tfont-size: 0.9rem;\n\tline-height: 1.4rem;\n\tcolor: #e74c3c;\n\tposition: relative;\n\ttop: -0.3rem;\n"], ["\n\tdisplay: block;\n\tfont-size: 0.9rem;\n\tline-height: 1.4rem;\n\tcolor: #e74c3c;\n\tposition: relative;\n\ttop: -0.3rem;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25;

var WrapperForm = function (_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement(Wrapper, { className: "wrapper" }, children)));
};

var visa = require('./img/logos/visa.png'), mastercard = require('./img/logos/mastercard.png'), sim = require('./img/sim.png');
var CardComponent = (function (_a) {
    var cardConfig = _a.cardConfig;
    var activeCard = cardConfig.activeCard, activeButton = cardConfig.activeButton, setActiveCard = cardConfig.setActiveCard, setActiveButton = cardConfig.setActiveButton, kindOfCard = cardConfig.kindOfCard, dataInfo = cardConfig.dataInfo;
    var cardChangeToggle = function () { return setActiveCard(!activeCard); }, buttonChangeToggle = function () { return setActiveButton(!activeButton); };
    return (React.createElement(React.Fragment, null,
        console.log(dataInfo),
        React.createElement(Card, { className: "card", activeCard: activeCard, onClick: cardChangeToggle },
            React.createElement(Front, null,
                React.createElement("div", { className: "logo" },
                    React.createElement(SwitchTransition, null,
                        React.createElement(CSSTransition, { key: kindOfCard === 'mastercard' ? 'mastercard' : 'visa', addEndListener: function (node, done) {
                                return node.addEventListener('transitionend', done, false);
                            }, classNames: "fade" },
                            React.createElement("img", { src: kindOfCard === 'mastercard' ? mastercard : visa, alt: "card" })))),
                React.createElement("img", { src: sim, alt: "sim" }),
                React.createElement("div", null,
                    React.createElement(Group, { className: "number" },
                        React.createElement(Label, null, "Card Number"),
                        React.createElement("p", null, dataInfo.cardNumber)),
                    React.createElement(FlexBox, null,
                        React.createElement(Group, { className: "name" },
                            React.createElement(Label, null, "Card name"),
                            React.createElement("p", null, dataInfo.name.toUpperCase())),
                        React.createElement(Group, { className: "exp" },
                            React.createElement(Label, null, "Expiration"),
                            React.createElement("p", null, dataInfo.expiryDate))))),
            React.createElement(Back, null,
                React.createElement(MagBar, null),
                React.createElement(Data, null,
                    React.createElement(Group, { className: "signature" },
                        React.createElement(Label, null, "Firma"),
                        React.createElement(Signature, null,
                            React.createElement("p", null, dataInfo.name))),
                    React.createElement(Group, { className: "ccv" },
                        React.createElement(Label, null, "CCV"),
                        React.createElement("p", { className: "ccv" }, dataInfo.ccv))),
                React.createElement(Legal, null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tempore."),
                React.createElement(Legal, null, "www.interbank.pe"))),
        React.createElement(ButtonContainer, { activeButton: activeButton, onClick: buttonChangeToggle },
            React.createElement("svg", { width: "22", height: "22", viewBox: "0 0 22 22", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M11 0C11.8284 0 12.5 0.671573 12.5 1.5V9.5L20.5 9.5C21.3284 9.5 22 10.1716 22 11C22 11.8284 21.3284 12.5 20.5 12.5L12.5 12.5V20.5C12.5 21.3284 11.8284 22 11 22C10.1716 22 9.5 21.3284 9.5 20.5L9.5 12.5L1.5 12.5C0.671573 12.5 -1.19209e-07 11.8284 0 11C1.19209e-07 10.1716 0.671573 9.5 1.5 9.5L9.5 9.5V1.5C9.5 0.671573 10.1716 0 11 0Z", fill: "white" })))));
});

var FormComponent = (function (_a) {
    var formConfig = _a.formConfig;
    var setActiveCard = formConfig.setActiveCard, activeButton = formConfig.activeButton, validCardNumber = formConfig.validCardNumber, validExpiryDate = formConfig.validExpiryDate, validName = formConfig.validName, validCcv = formConfig.validCcv, handleChangeCardNumber = formConfig.handleChangeCardNumber, handleBlurCardNumber = formConfig.handleBlurCardNumber, handleChangeName = formConfig.handleChangeName, handleBlurName = formConfig.handleBlurName, handleChangeCcv = formConfig.handleChangeCcv, handleBlurCcv = formConfig.handleBlurCcv, handleChangeExpiryDate = formConfig.handleChangeExpiryDate, handleBlurExpiryDate = formConfig.handleBlurExpiryDate, dataInfo = formConfig.dataInfo;
    var cardChangeToFalse = function () { return setActiveCard(false); }, cardChangeToTrue = function () { return setActiveCard(true); };
    return (React.createElement(Form, { activeForm: activeButton },
        React.createElement(FormGroup, { valid: validCardNumber },
            React.createElement("label", { htmlFor: "number" }, "Card number"),
            React.createElement(InputNumber, { maxLength: 19, minLength: 19, name: "number", autoComplete: "off", required: true, value: dataInfo.cardNumber, onBlur: handleBlurCardNumber, onChange: handleChangeCardNumber, onFocus: cardChangeToFalse }),
            validCardNumber === false && (React.createElement(Error, null, "Please provide a valid card number"))),
        React.createElement(FormGroup, { valid: validName },
            React.createElement("label", { htmlFor: "name" }, "Name on card"),
            React.createElement(InputName, { name: "name", required: true, value: dataInfo.name, onBlur: handleBlurName, onChange: handleChangeName, onFocus: cardChangeToFalse }),
            validName === false && React.createElement(Error, null, "Please provide a valid name")),
        React.createElement(FormGroupFlex, null,
            React.createElement(FormGroup, { valid: validExpiryDate },
                React.createElement("label", { htmlFor: "expiry" }, "Expiry date"),
                React.createElement(InputDate, { name: "expiry", placeholder: "MM/YY", required: true, value: dataInfo.expiryDate, onBlur: handleBlurExpiryDate, onChange: handleChangeExpiryDate, onFocus: cardChangeToFalse }),
                validExpiryDate === false && (React.createElement(Error, null, "Please provide a date, month and year"))),
            React.createElement(FormGroup, { valid: validCcv },
                React.createElement("label", { htmlFor: "ccv" }, "CCV"),
                React.createElement(InputCcv, { name: "ccv", value: dataInfo.ccv, required: true, onBlur: handleBlurCcv, onChange: handleChangeCcv, onFocus: cardChangeToTrue }),
                validCcv === false && React.createElement(Error, null, "Please provide a right ccv"))),
        validCardNumber && validName && validExpiryDate && validCcv ? (React.createElement(SendButton, null, "Send")) : (React.createElement(SendButtonDisable, null, "Send"))));
});

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
var validateCreditCardNumber = function (inputText) {
    var number = convertToNumber(inputText);
    var visaRegEx = /^4/, mastercardRegEx = /^(5[1-5])/;
    if (visaRegEx.test(number))
        return { card: 'visa', ok: true };
    if (mastercardRegEx.test(number))
        return { card: 'mastercard', ok: true };
    return { card: undefined, ok: false };
};
var cc_format = function (value) {
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

var useConfig = function () {
    var _a = useState(false), activeCard = _a[0], setActiveCard = _a[1];
    var _b = useState(true), activeButton = _b[0], setActiveButton = _b[1], _c = useState(undefined), validCardNumber = _c[0], setValidCardNumber = _c[1], _d = useState(undefined), validExpiryDate = _d[0], setValidExpiryDate = _d[1], _e = useState(undefined), validName = _e[0], setValidName = _e[1], _f = useState(undefined), validCcv = _f[0], setValidCcv = _f[1], _g = useState(undefined), kindOfCard = _g[0], setKindOfCard = _g[1];
    var _h = useState(''), cardNumber = _h[0], setCardNumber = _h[1], _j = useState(''), name = _j[0], setName = _j[1], _k = useState(''), ccv = _k[0], setCcv = _k[1], _l = useState(''), expiryDate = _l[0], setExpiryDate = _l[1], dataInfo = {
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
                setCardNumber(cc_format(value));
                console.log(cardNumber);
                var card = validateCreditCardNumber(cardNumber).card;
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

export { CardComponent, FormComponent, WrapperForm as Wrapper, useConfig };
