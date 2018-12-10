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
var RFValidatorIsNumeric = /** @class */ (function (_super) {
    __extends(RFValidatorIsNumeric, _super);
    function RFValidatorIsNumeric(customErrorText) {
        var _this = _super.call(this) || this;
        _this.customErrorText = customErrorText;
        return _this;
    }
    RFValidatorIsNumeric.prototype.validate = function (value) {
        return !isNaN(parseFloat(value));
    };
    RFValidatorIsNumeric.prototype.extractError = function () {
        return this.customErrorText || "INVALID_NUMBER";
    };
    return RFValidatorIsNumeric;
}(RFValidator_1.RFValidator));
exports.RFValidatorIsNumeric = RFValidatorIsNumeric;
