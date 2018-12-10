import { RFValidator } from "./RFValidator";

export interface IRFFormContext {
  setValue: (name: string, value: IRFFormValue) => void;
  getErrors: (name: string) => string[];
}

export interface IRFFormValue {
  value: string;
  validators: RFValidator[];
  errors?: string[];
}

export interface IRFFormModel {
  [name: string]: IRFFormValue;
}

export interface IRFFormModelOutput {
  values: { [name: string]: string };
  errors: { [name: string]: string[] };
  isValid: boolean;
}
