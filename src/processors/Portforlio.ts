import { PathLike } from "fs";
import { Numeral } from "numeral";
import { Currency } from "../enum/Currency";
import { CurrencyConverter } from "./CurrencyConverter";
import { TransactionAggregrator } from "./TransactionAggregator";

export class Portfolio {
  constructor(private csvPath: PathLike) { }

  async execute(): Promise<void> {
    const result = await TransactionAggregrator.parseFile(this.csvPath)

    const toCurrency = Currency.USD;
    for (const [token, amount] of result) {
      const convertedAmount: Numeral = await CurrencyConverter.convertTo(toCurrency, token, amount)
      console.log(`${amount.value()} ${token} = ${convertedAmount.format('0.00')} ${toCurrency}`);
    }

  }
}
