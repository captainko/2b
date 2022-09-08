export type TransactionType = "DEPOSIT" | "WITHDRAWAL"

export interface TransactionData {
  timestamp: number;
  transaction_type: TransactionType;
  token: string;
  amount: string;
}
