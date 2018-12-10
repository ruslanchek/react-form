import { RFValidator } from "../RFValidator";
export declare class RFValidatorIsEqualModel extends RFValidator {
    readonly modelName: string;
    readonly customErrorText?: string;
    constructor(modelName: string, customErrorText?: string);
    validate(value: string): boolean;
    extractError(): string;
}
