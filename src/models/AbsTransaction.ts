import numeral, { Numeral } from "numeral";
import { Transaction } from "./Transaction";
import { TransactionData } from "./TransactionData";

export abstract class AbsTransaction implements Transaction {
  protected _amount: Numeral;
  protected _token: string;
  constructor(data: TransactionData) {
    this._amount = numeral(data.amount);
    this._token = data.token;

  }

  get value(): Numeral { return this._amount.clone(); }
  get token(): string { return this._token }

}
