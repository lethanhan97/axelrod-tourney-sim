export class Tournament {
  // TODO: make strategies type once we have interface
  private _strategies: unknown[] = [];
  private _rounds: number = 0;

  constructor(strategies?: unknown[], rounds?: number) {
    this._strategies = strategies || [];
    rounds && this.setRounds(rounds);
  }

  get rounds() {
    return this._rounds;
  }

  get strategies() {
    return this._strategies;
  }

  addStrategy(strategy: unknown) {
    this._strategies.push(strategy);
  }

  setRounds(rounds: number) {
    if (rounds <= 0) {
      throw new Error('There needs to be at least 1 round');
    }

    this._rounds = rounds;
  }
}
