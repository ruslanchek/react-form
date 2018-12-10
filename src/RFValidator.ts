import { IRFFormModel } from "./interfaces";

export abstract class RFValidator {
  public model: IRFFormModel = null;
  public abstract validate(value: string): boolean;
  public abstract extractError(): string;
}
