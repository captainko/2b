type DebugLevel = "info" | "warn" | "error";

const DebugLevels: ReadonlyArray<DebugLevel> = ["info", "warn", "error"];

class Logger {
  private _debugLevel: DebugLevel;

  constructor() {
    const debugLevel = (process.env.DEBUG ?? "error") as DebugLevel;

    if (!this.isDebugLevel(debugLevel)) {
      throw Error(`Invalid debug level ${debugLevel}. Supported debug levels: ${DebugLevels.join(', ')}`);
    }

    this._debugLevel = debugLevel;
  }
  get debugLevel(): DebugLevel {
    return this._debugLevel;
  }

  private isDebugLevel(level: unknown): level is DebugLevel {
    return DebugLevels.includes(level as DebugLevel);
  }

  private get debugLevelValue(): number {
    return this.levelValue(this.debugLevel)
  }

  private levelValue(level: DebugLevel): number {
    return DebugLevels.findIndex((v) => v === level);
  }

  public log(...args: unknown[]): void {
    if (this.debugLevelValue <= this.levelValue("info")) {
      console.log(...args);
    }
  }

  public warn(...args: unknown[]): void {
    if (this.debugLevelValue <= this.levelValue("warn")) {
      console.log(...args);
    }
  }

  public error(...args: unknown[]): void {
    if (this.debugLevelValue <= this.levelValue("error")) {
      console.log(...args);
    }
  }
}

export default new Logger();
