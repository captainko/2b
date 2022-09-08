import fetch from "node-fetch";
import { Numeral } from "numeral";
import Logger from "../utils/Logger";

export type CurencyResponse = Record<string, number>

export class CurrencyConverter {
  private static async fetchExRate(target: string, token: string): Promise<number> {
    const res = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${token}&tsyms=${target}`);
    const body = await res.json() as CurencyResponse;
    return body[target];
  }

  public static async convertTo(target: string, token: string, amount: Numeral) {
    const exRate = await CurrencyConverter.fetchExRate(target, token);
    Logger.log(`1 ${token} = ${exRate} ${target}`);

    return amount.clone().multiply(exRate);
  }
}

