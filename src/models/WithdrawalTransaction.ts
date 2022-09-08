import numeral from "numeral";
import { Numeral } from "numeral";
import { AbsTransaction } from "./AbsTransaction";

export class WithdrawalTransaction extends AbsTransaction {

  get value(): Numeral {
    return numeral(0).subtract(this._amount.value())
  }
}
