import { BattleOutcome, Strategy } from './types';

export class TitForTatStrategy implements Strategy {
  name: string = 'Tit for Tat';

  constructor() {}

  battle(opponentPastActions: BattleOutcome[]) {
    if (opponentPastActions.length === 0) return BattleOutcome.COORPERATE;

    return opponentPastActions[opponentPastActions.length - 1];
  }
}
