import { RFValidator } from "../RFValidator";
export declare class RFValidatorIsNumeric extends RFValidator {
    readonly customErrorText?: string;
    constructor(customErrorText?: string);
    validate(value: string): boolean;
    extractError(): string;
}
