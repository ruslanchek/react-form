import { RFValidator } from "../RFValidator";
export declare class RFValidatorRegExp extends RFValidator {
    readonly regExp: RegExp;
    readonly customErrorText?: string;
    constructor(regExp: RegExp, customErrorText?: string);
    validate(value: string): boolean;
    extractError(): string;
}
