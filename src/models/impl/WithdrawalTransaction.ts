import numeral from "numeral";
import { Numeral } from "numeral";
import { AbsTransaction } from "./AbsTransaction";

export class WithdrawalTransaction extends AbsTransaction {

  get value(): Numeral {
    return numeral(-(this._amount.value() ?? 0))
  }
}
