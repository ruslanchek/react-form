import { RFValidator } from "../RFValidator";
export declare class RFValidatorMaxLength extends RFValidator {
    readonly max: number;
    readonly customErrorText?: string;
    constructor(max: number, customErrorText?: string);
    validate(value: string): boolean;
    extractError(): string;
}
