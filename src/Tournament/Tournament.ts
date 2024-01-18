import { Strategy } from '../strategies/types';

export class Tournament {
  private _strategies: Strategy[] = [];
  private _rounds: number = 0;

  constructor(strategies?: Strategy[], rounds?: number) {
    this._strategies = strategies || [];
    rounds && this.setRounds(rounds);
  }

  get rounds() {
    return this._rounds;
  }

  get strategies() {
    return this._strategies;
  }

  addStrategy(strategy: Strategy) {
    this._strategies.push(strategy);
  }

  setRounds(rounds: number) {
    if (rounds <= 0) {
      throw new Error('There needs to be at least 1 round');
    }

    this._rounds = rounds;
  }
}
