import { Transaction, TransactionData, TransactionFactory } from "../interface";
import { DepositTransaction } from "./DepositTransaction";
import { WithdrawalTransaction } from "./WithdrawalTransaction";

export class TransactionFactoryImpl implements TransactionFactory {
  public from(data: TransactionData): Transaction {
    let result: Transaction;
    switch (data.transaction_type) {
      case "WITHDRAWAL":
        result = new WithdrawalTransaction(data);
        break;

      case "DEPOSIT":
        result = new DepositTransaction(data);
        break

      default:
        throw Error(`transaction_type='${data.transaction_type}' is not supported`);
    }

    return result;
  }
}
