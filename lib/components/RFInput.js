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
var RFInputErrors_1 = require("./RFInputErrors");
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isFocused: false,
            value: '',
            animatedLabel: false,
        };
        _this.animatedLabelTimeout = null;
        _this.input = null;
        _this.formContext = null;
        return _this;
    }
    Input.prototype.componentDidMount = function () {
        var _this = this;
        this.setValue(this.props.value);
        if (this.input.value) {
            this.setValue(this.input.value);
        }
        this.animatedLabelTimeout = setTimeout(function () {
            _this.setState({
                animatedLabel: true,
            });
        }, 400);
    };
    Input.prototype.componentWillMount = function () {
        clearTimeout(this.animatedLabelTimeout);
    };
    Input.prototype.render = function () {
        var _this = this;
        var _a = this.props, showError = _a.showError, name = _a.name, icon = _a.icon, label = _a.label, type = _a.type, autoComplete = _a.autoComplete, onKeyDown = _a.onKeyDown, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, inputClassName = _a.inputClassName, autoFocus = _a.autoFocus, labelsClassName = _a.labelsClassName, labelClassName = _a.labelClassName;
        var _b = this.state, animatedLabel = _b.animatedLabel, value = _b.value;
        var id = "input-" + name;
        return (React.createElement(RFForm_1.RFFormContext.Consumer, null, function (formContext) {
            _this.formContext = formContext;
            return (React.createElement(React.Fragment, null,
                React.createElement("label", { htmlFor: id, className: _this.props.containerClassName },
                    showError && React.createElement(RFInputErrors_1.RFInputErrors, { inputName: name }),
                    React.createElement("div", { className: labelsClassName },
                        _this.props.icon && _this.props.icon,
                        React.createElement("div", { className: labelClassName }, label)),
                    React.createElement("input", { id: id, name: name, type: type, autoComplete: autoComplete, autoFocus: autoFocus, ref: function (ref) { return (_this.input = ref); }, className: inputClassName, onFocus: function (e) {
                            _this.setState({
                                isFocused: true,
                            });
                            onFocus(e);
                        }, onBlur: function (e) {
                            _this.setState({
                                isFocused: false,
                            });
                            onBlur(e);
                        }, onChange: function (e) {
                            _this.setValue(e.target.value);
                            onChange(e);
                        }, onKeyDown: function (e) {
                            _this.setValue(_this.input.value);
                            onKeyDown(e);
                        } }))));
        }));
    };
    Input.prototype.setValue = function (value) {
        this.setState({
            value: value,
        });
        this.input.value = value;
        this.formContext.setValue(this.props.name, {
            value: value,
            validators: this.props.validators,
        });
    };
    Input.defaultProps = {
        validators: [],
        autoFocus: false,
        value: '',
        icon: null,
        type: 'text',
        name: '',
        label: '',
        inputClassName: '',
        containerClassName: '',
        labelsClassName: '',
        labelClassName: '',
        onFocus: function (e) { },
        onBlur: function (e) { },
        onChange: function (e) { },
        onKeyDown: function (e) { },
    };
    return Input;
}(React.PureComponent));
exports.Input = Input;
