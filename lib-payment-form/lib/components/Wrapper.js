"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("./styles");
var WrapperForm = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(styles_1.Wrapper, { className: "wrapper" }, children)));
};
exports.default = WrapperForm;
