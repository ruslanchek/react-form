import { RFValidator } from "../RFValidator";
export declare class RFValidatorIsEmail extends RFValidator {
    readonly customErrorText?: string;
    constructor(customErrorText?: string);
    validate(value: string): boolean;
    extractError(): string;
}
