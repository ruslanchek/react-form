import { RFValidator } from "../RFValidator";

export class RFValidatorMinLength extends RFValidator {
  constructor(readonly min: number, readonly customErrorText?: string) {
    super();
  }

  public validate(value: string): boolean {
    return value && value.length >= this.min;
  }

  public extractError(): string {
    return this.customErrorText || "MINIMUM_NOT_REACHED";
  }
}
