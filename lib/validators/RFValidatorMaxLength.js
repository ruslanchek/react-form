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
var RFValidatorMaxLength = /** @class */ (function (_super) {
    __extends(RFValidatorMaxLength, _super);
    function RFValidatorMaxLength(max, customErrorText) {
        var _this = _super.call(this) || this;
        _this.max = max;
        _this.customErrorText = customErrorText;
        return _this;
    }
    RFValidatorMaxLength.prototype.validate = function (value) {
        return !value || value.length <= this.max;
    };
    RFValidatorMaxLength.prototype.extractError = function () {
        return this.customErrorText || "MAXIMUM_REACHED";
    };
    return RFValidatorMaxLength;
}(RFValidator_1.RFValidator));
exports.RFValidatorMaxLength = RFValidatorMaxLength;
