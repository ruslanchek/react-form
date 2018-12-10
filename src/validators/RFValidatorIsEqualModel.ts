import { RFValidator } from "../RFValidator";

export class RFValidatorIsEqualModel extends RFValidator {
  constructor(readonly modelName: string, readonly customErrorText?: string) {
    super();
  }

  public validate(value: string): boolean {
    return this.model[this.modelName].value === value;
  }

  public extractError(): string {
    return this.customErrorText || "NOT_EQUAL";
  }
}
