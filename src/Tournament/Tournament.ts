import { BattleOutcome, Strategy } from '../strategies/types';

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

  startTournament() {
    if (this._rounds <= 0) {
      throw new Error('You need at least 1 round in the tournament');
    }

    if (this._strategies.length <= 1) {
      throw new Error('You need at least 2 strategies in the tournament');
    }

    for (let i = 0; i < this._strategies.length - 1; i++) {
      for (let j = i + 1; j < this._strategies.length; j++) {
        const strategyA = this._strategies[i];
        const strategyB = this._strategies[j];

        this.battle(strategyA, strategyB);
      }
    }
  }

  battle(strategyA: Strategy, strategyB: Strategy) {
    const stratAActions: BattleOutcome[] = [];
    const stratBActions: BattleOutcome[] = [];

    for (let i = 0; i < this._rounds; i++) {
      const outcomeA = strategyA.battle(stratBActions);
      const outcomeB = strategyB.battle(stratAActions);

      stratAActions.push(outcomeA);
      stratBActions.push(outcomeB);
    }

    console.log(`${strategyA.name} vs ${strategyB.name}`, {
      stratAActions,
      stratBActions,
    });
  }
}
