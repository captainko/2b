import { Transaction } from "./Transaction";
import { TransactionData } from "./TransactionData";

export interface TransactionFactory {
  from(data: TransactionData): Transaction;
}
