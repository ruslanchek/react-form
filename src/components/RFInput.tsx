import * as React from 'react';
import { RFFormContext } from './RFForm';
import { RFInputErrors } from './RFInputErrors';
import { RFValidator } from '../RFValidator';
import { IRFFormContext } from '../interfaces';

interface IProps {
	name: string;
	label: string;
	autoFocus?: boolean;
	value?: string;
	type?: string;
	icon?: React.ReactChild;
	autoComplete?: string;
	validators?: RFValidator[];
	inputClassName?: string;
	containerClassName?: string;
	labelsClassName?: string;
	labelClassName?: string;
	showError: boolean;
	onFocus?: (e) => void;
	onBlur?: (e) => void;
	onChange?: (e) => void;
	onKeyDown?: (e) => void;
}

interface IState {
	isFocused: boolean;
	value: string;
	animatedLabel: boolean;
}

export class Input extends React.PureComponent<IProps, {}> {
	public static defaultProps: Partial<IProps> = {
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
		onFocus: e => {},
		onBlur: e => {},
		onChange: e => {},
		onKeyDown: e => {},
	};

	public state: IState = {
		isFocused: false,
		value: '',
		animatedLabel: false,
	};

	private animatedLabelTimeout = null;
	private input = null;
	private formContext: IRFFormContext = null;

	public componentDidMount() {
		this.setValue(this.props.value);

		if (this.input.value) {
			this.setValue(this.input.value);
		}

		this.animatedLabelTimeout = setTimeout(() => {
			this.setState({
				animatedLabel: true,
			});
		}, 400);
	}

	public componentWillMount() {
		clearTimeout(this.animatedLabelTimeout);
	}

	public render() {
		const {
			showError,
			name,
			icon,
			label,
			type,
			autoComplete,
			onKeyDown,
			onChange,
			onBlur,
			onFocus,
			inputClassName,
			autoFocus,
			labelsClassName,
			labelClassName,
		} = this.props;
		const { animatedLabel, value } = this.state;
		const id = `input-${name}`;

		return (
			<RFFormContext.Consumer>
				{formContext => {
					this.formContext = formContext;

					return (
						<React.Fragment>
							<label htmlFor={id} className={this.props.containerClassName}>
								{showError && <RFInputErrors inputName={name} />}

								<div className={labelsClassName}>
									{this.props.icon && this.props.icon}

									<div className={labelClassName}>{label}</div>
								</div>

								<input
									id={id}
									name={name}
									type={type}
									autoComplete={autoComplete}
									autoFocus={autoFocus}
									ref={ref => (this.input = ref)}
									className={inputClassName}
									onFocus={e => {
										this.setState({
											isFocused: true,
										});
										onFocus(e);
									}}
									onBlur={e => {
										this.setState({
											isFocused: false,
										});
										onBlur(e);
									}}
									onChange={e => {
										this.setValue(e.target.value);
										onChange(e);
									}}
									onKeyDown={e => {
										this.setValue(this.input.value);
										onKeyDown(e);
									}}
								/>
							</label>
						</React.Fragment>
					);
				}}
			</RFFormContext.Consumer>
		);
	}

	private setValue(value: string): void {
		this.setState({
			value,
		});

		this.input.value = value;
		this.formContext.setValue(this.props.name, {
			value,
			validators: this.props.validators,
		});
	}
}
