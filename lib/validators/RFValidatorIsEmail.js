"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var RFValidator_1 = require("../RFValidator");
var RFValidatorIsEmail = /** @class */ (function (_super) {
    __extends(RFValidatorIsEmail, _super);
    function RFValidatorIsEmail(customErrorText) {
        var _this = _super.call(this) || this;
        _this.customErrorText = customErrorText;
        return _this;
    }
    RFValidatorIsEmail.prototype.validate = function (value) {
        value = value.trim();
        var regExp = /^(([^\!<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regExp.test(value);
    };
    RFValidatorIsEmail.prototype.extractError = function () {
        return this.customErrorText || "EMAIL_INCORRECT";
    };
    return RFValidatorIsEmail;
}(RFValidator_1.RFValidator));
exports.RFValidatorIsEmail = RFValidatorIsEmail;
