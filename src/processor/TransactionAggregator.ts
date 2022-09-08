import * as csv from "fast-csv";
import { createReadStream, PathLike } from "fs";
import { Numeral } from "numeral";
import { TransactionData, TransactionFactory } from "../models";

export type TransactionAggregateResult = Map<string, Numeral>

export class TransactionAggregrator {
  /** Aggregate total transaction balance per token from a csv file */
  public static parseFile(path: PathLike): Promise<TransactionAggregateResult> {
    return new Promise((res, rej) => {

      const result = new Map<string, Numeral>();

      createReadStream(path)
        .pipe(csv.parse({ headers: true }))

        .on("data", function calTransaction(data: TransactionData) {
          const trans = TransactionFactory.from(data)

          const value: Numeral =
            result.has(trans.token)
              ? (result.get(trans.token) as Numeral).add(trans.value.value())
              : trans.value;

          result.set(trans.token, value)
        })

        .once("end", () => { res(result) })

        .once("error", rej)

    })
  }

}
