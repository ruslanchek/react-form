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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enums_1 = require("../enums");
exports.RFFormContext = React.createContext({
    setValue: null,
    getErrors: null,
});
var RFForm = /** @class */ (function (_super) {
    __extends(RFForm, _super);
    function RFForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isValid: null,
            model: {},
        };
        _this.getErrors = function (name) {
            var model = _this.state.model;
            if (model[name] && model[name].errors) {
                return model[name].errors;
            }
            else {
                return [];
            }
        };
        _this.setValue = function (name, value) {
            var newValues = _this.state.model;
            newValues[name] = value;
            _this.setState({
                model: newValues,
            }, function () {
                if (_this.props.validateOn === enums_1.EFormValidateOn.CHANGE ||
                    _this.props.validateOn === enums_1.EFormValidateOn.ALL) {
                    _this.validate(function () { });
                }
            });
        };
        _this.handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                e.preventDefault();
                if (this.props.validateOn === enums_1.EFormValidateOn.SUBMIT ||
                    this.props.validateOn === enums_1.EFormValidateOn.ALL) {
                    this.validate(function () {
                        _this.props.onSubmit(_this.collectModel());
                    });
                }
                else {
                    this.props.onSubmit(this.collectModel());
                }
                return [2 /*return*/];
            });
        }); };
        return _this;
    }
    RFForm.prototype.render = function () {
        return (React.createElement("form", { onSubmit: this.handleSubmit, className: this.props.className },
            React.createElement(exports.RFFormContext.Provider, { value: {
                    setValue: this.setValue,
                    getErrors: this.getErrors,
                } }, this.props.children)));
    };
    RFForm.prototype.validate = function (callback) {
        var model = this.state.model;
        var isValid = true;
        var _loop_1 = function (modelKey) {
            if (model.hasOwnProperty(modelKey)) {
                var _a = model[modelKey], validators = _a.validators, value_1 = _a.value;
                model[modelKey].errors = [];
                validators.forEach(function (validator) {
                    validator.model = model;
                    if (!validator.validate(value_1)) {
                        model[modelKey].errors.push(validator.extractError());
                        isValid = false;
                    }
                    validator.model = null;
                });
            }
        };
        for (var modelKey in model) {
            _loop_1(modelKey);
        }
        this.setState({
            isValid: isValid,
            model: model,
        }, callback);
    };
    RFForm.prototype.collectModel = function () {
        var model = this.state.model;
        var resultModel = {};
        var errors = {};
        for (var modelKey in model) {
            if (model.hasOwnProperty(modelKey)) {
                resultModel[modelKey] = model[modelKey].value;
                errors[modelKey] = model[modelKey].errors;
            }
        }
        return {
            isValid: this.state.isValid,
            values: resultModel,
            errors: errors,
        };
    };
    return RFForm;
}(React.Component));
exports.RFForm = RFForm;
