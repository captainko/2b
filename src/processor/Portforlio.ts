import { PathLike } from "fs";
import { Numeral } from "numeral";
import { CurrencyConverter } from "./CurrencyConverter";
import { TransactionAggregrator } from "./TransactionAggregator";

export class Portfolio {
  constructor(private csvPath: PathLike) { }

  async execute(): Promise<void> {
    const result = await TransactionAggregrator.parseFile(this.csvPath)

    const target = "USD"
    for (const [token, amount] of result) {
      const convertedAmount: Numeral = await CurrencyConverter.convertTo(target, token, amount)
      console.log(`${amount.value()} ${token} = ${convertedAmount.format('0.00')} ${target}`);
    }

  }
}
