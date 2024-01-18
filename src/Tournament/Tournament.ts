import { BattleOutcome, Strategy } from '../strategies/types';

interface TournamentResult {
  [name: string]: number;
}

const { COORPERATE, DEFECT } = BattleOutcome;

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

  startTournament(): TournamentResult {
    if (this._rounds <= 0) {
      throw new Error('You need at least 1 round in the tournament');
    }

    if (this._strategies.length <= 1) {
      throw new Error('You need at least 2 strategies in the tournament');
    }

    const tournamentResult = this._strategies.reduce((r, s) => {
      r[s.name] = 0;

      return r;
    }, {} as TournamentResult);

    for (let i = 0; i < this._strategies.length - 1; i++) {
      for (let j = i + 1; j < this._strategies.length; j++) {
        const strategyA = this._strategies[i];
        const strategyB = this._strategies[j];

        this.battle(strategyA, strategyB, tournamentResult);
      }
    }

    return tournamentResult;
  }

  battle(
    strategyA: Strategy,
    strategyB: Strategy,
    tournamentResult: TournamentResult
  ) {
    const stratAActions: BattleOutcome[] = [];
    const stratBActions: BattleOutcome[] = [];

    for (let i = 0; i < this._rounds; i++) {
      const outcomeA = strategyA.battle(stratBActions);
      const outcomeB = strategyB.battle(stratAActions);

      const [resultA, resultB] = this.judge(outcomeA, outcomeB);

      stratAActions.push(outcomeA);
      stratBActions.push(outcomeB);

      tournamentResult[strategyA.name] += resultA;
      tournamentResult[strategyB.name] += resultB;
    }
  }

  judge(outcomeA: BattleOutcome, outcomeB: BattleOutcome): [number, number] {
    if (outcomeA === COORPERATE && outcomeB === COORPERATE) {
      return [3, 3];
    }

    if (outcomeA === DEFECT && outcomeB === COORPERATE) {
      return [5, 0];
    }

    if (outcomeA === COORPERATE && outcomeB === DEFECT) {
      return [0, 5];
    }

    return [1, 1];
  }
}
