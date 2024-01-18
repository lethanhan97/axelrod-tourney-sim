import { BattleOutcome, Strategy } from './types';

export class FriedmanStrategy implements Strategy {
  name: string = 'Friedman';

  constructor() {}

  battle(opponentPastActions: BattleOutcome[]) {
    const isOpponentAlwaysCoorperate = opponentPastActions.reduce(
      (result, currentAction) =>
        result && currentAction === BattleOutcome.COORPERATE,
      true
    );

    // Always defect as long as an opponent defected once
    return isOpponentAlwaysCoorperate
      ? BattleOutcome.COORPERATE
      : BattleOutcome.DEFECT;
  }
}
