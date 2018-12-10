import * as React from 'react';
import {
	IRFFormValue,
	IRFFormModelOutput,
	IRFFormModel,
	IRFFormContext,
} from '../interfaces';
import { EFormValidateOn } from '../enums';

export const RFFormContext = React.createContext<IRFFormContext>({
	setValue: null,
	getErrors: null,
});

interface IProps {
	onSubmit: (output: IRFFormModelOutput) => void;
	validateOn: EFormValidateOn;
	className?: string;
}

interface IState {
	isValid: boolean;
	model: IRFFormModel;
}

export class RFForm extends React.Component<IProps, IState> {
	public state: IState = {
		isValid: null,
		model: {},
	};

	public render() {
		return (
			<form onSubmit={this.handleSubmit} className={this.props.className}>
				<RFFormContext.Provider
					value={{
						setValue: this.setValue,
						getErrors: this.getErrors,
					}}
				>
					{this.props.children}
				</RFFormContext.Provider>
			</form>
		);
	}

	private validate(callback: () => void) {
		const { model } = this.state;
		let isValid: boolean = true;

		for (const modelKey in model) {
			if (model.hasOwnProperty(modelKey)) {
				const { validators, value } = model[modelKey];

				model[modelKey].errors = [];

				validators.forEach(validator => {
					validator.model = model;

					if (!validator.validate(value)) {
						model[modelKey].errors.push(validator.extractError());
						isValid = false;
					}

					validator.model = null;
				});
			}
		}

		this.setState(
			{
				isValid,
				model,
			},
			callback,
		);
	}

	private collectModel(): IRFFormModelOutput {
		const { model } = this.state;
		const resultModel: { [name: string]: string } = {};
		const errors: { [name: string]: string[] } = {};

		for (const modelKey in model) {
			if (model.hasOwnProperty(modelKey)) {
				resultModel[modelKey] = model[modelKey].value;
				errors[modelKey] = model[modelKey].errors;
			}
		}

		return {
			isValid: this.state.isValid,
			values: resultModel,
			errors,
		};
	}

	private getErrors = (name: string) => {
		const { model } = this.state;

		if (model[name] && model[name].errors) {
			return model[name].errors;
		} else {
			return [];
		}
	};

	private setValue = (name: string, value: IRFFormValue) => {
		const newValues = this.state.model;

		newValues[name] = value;

		this.setState(
			{
				model: newValues,
			},
			() => {
				if (
					this.props.validateOn === EFormValidateOn.CHANGE ||
					this.props.validateOn === EFormValidateOn.ALL
				) {
					this.validate(() => {});
				}
			},
		);
	};

	private handleSubmit = async e => {
		e.preventDefault();

		if (
			this.props.validateOn === EFormValidateOn.SUBMIT ||
			this.props.validateOn === EFormValidateOn.ALL
		) {
			this.validate(() => {
				this.props.onSubmit(this.collectModel());
			});
		} else {
			this.props.onSubmit(this.collectModel());
		}
	};
}
