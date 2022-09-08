import { Numeral } from "numeral";
import path from "path";
import { TransactionAggregrator, CurrencyConverter } from "./processor";
import Logger from "./utils/Logger";


// Write your answer here



async function main() {
  const DATA_PATH = path.resolve(process.cwd(), 'data', 'transactions.csv');

  const result = await TransactionAggregrator.parseFile(DATA_PATH)

  const target = "USD"
  for (const [token, amount] of result) {
    const convertedAmount: Numeral = await CurrencyConverter.convertTo(target, token, amount)
    console.log(`${amount.value()} ${token} = ${convertedAmount.format('0.00')} ${target}`);
  }

}

main().catch(err => {
  Logger.error(err)
})
