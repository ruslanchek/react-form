import { RFValidator } from "../RFValidator";
export declare class RFValidatorMinLength extends RFValidator {
    readonly min: number;
    readonly customErrorText?: string;
    constructor(min: number, customErrorText?: string);
    validate(value: string): boolean;
    extractError(): string;
}
