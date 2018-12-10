import { RFValidator } from "../RFValidator";

export class RFValidatorIsNumeric extends RFValidator {
  constructor(readonly customErrorText?: string) {
    super();
  }

  public validate(value: string): boolean {
    return !isNaN(parseFloat(value));
  }

  public extractError(): string {
    return this.customErrorText || "INVALID_NUMBER";
  }
}
