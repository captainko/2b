import path from "path";
import { Portfolio } from "./processors";
import Logger from "./utils/Logger";


// Write your answer here



async function main() {
  const DATA_PATH = path.resolve(process.cwd(), 'data', 'transactions.csv');

  const portfolio = new Portfolio(DATA_PATH);
  await portfolio.execute()

}

main().catch(err => {
  Logger.error(err)
})
