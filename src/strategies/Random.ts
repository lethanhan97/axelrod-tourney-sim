import { BattleOutcome, Strategy } from './types';

export class RandomStrategy implements Strategy {
  name: string = 'Random';

  constructor() {}

  battle() {
    const shouldCoorperate = Math.random() >= 0.5;

    // Always defect as long as an opponent defected once
    return shouldCoorperate ? BattleOutcome.COORPERATE : BattleOutcome.DEFECT;
  }
}
