import { RFValidator } from "../RFValidator";

export class RFValidatorIsRequired extends RFValidator {
  constructor(readonly customErrorText?: string) {
    super();
  }

  public validate(value: string): boolean {
    return !!value;
  }

  public extractError(): string {
    return this.customErrorText || "REQUIRED";
  }
}
