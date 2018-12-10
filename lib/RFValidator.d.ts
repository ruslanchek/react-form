import { IRFFormModel } from "./interfaces";
export declare abstract class RFValidator {
    model: IRFFormModel;
    abstract validate(value: string): boolean;
    abstract extractError(): string;
}
