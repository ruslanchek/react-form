import * as React from 'react';
import { RFFormContext } from './RFForm';

interface IProps {
	inputName: string;
}

export class RFInputErrors extends React.PureComponent<IProps, {}> {
	public render() {
		const { inputName } = this.props;

		return (
			<RFFormContext.Consumer>
				{formContext => {
					const errors = formContext.getErrors(inputName);

					return (
						<div>
							{errors.map((error, i) => {
								return <div key={i}>{error}</div>;
							})}
						</div>
					);
				}}
			</RFFormContext.Consumer>
		);
	}
}
