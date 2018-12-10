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
var React = require("react");
var RFForm_1 = require("./RFForm");
var RFInputErrors = /** @class */ (function (_super) {
    __extends(RFInputErrors, _super);
    function RFInputErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RFInputErrors.prototype.render = function () {
        var inputName = this.props.inputName;
        return (React.createElement(RFForm_1.RFFormContext.Consumer, null, function (formContext) {
            var errors = formContext.getErrors(inputName);
            return (React.createElement("div", null, errors.map(function (error, i) {
                return React.createElement("div", { key: i }, error);
            })));
        }));
    };
    return RFInputErrors;
}(React.PureComponent));
exports.RFInputErrors = RFInputErrors;
