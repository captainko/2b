import type { Numeral } from "numeral";

export interface Transaction {
  token: string;
  value: Numeral;
}
