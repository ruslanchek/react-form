import * as React from 'react';
import { IRFFormModelOutput, IRFFormModel, IRFFormContext } from '../interfaces';
import { EFormValidateOn } from '../enums';
export declare const RFFormContext: React.Context<IRFFormContext>;
interface IProps {
    onSubmit: (output: IRFFormModelOutput) => void;
    validateOn: EFormValidateOn;
    className?: string;
}
interface IState {
    isValid: boolean;
    model: IRFFormModel;
}
export declare class RFForm extends React.Component<IProps, IState> {
    state: IState;
    render(): JSX.Element;
    private validate;
    private collectModel;
    private getErrors;
    private setValue;
    private handleSubmit;
}
export {};
