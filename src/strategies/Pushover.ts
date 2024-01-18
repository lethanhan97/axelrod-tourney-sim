import { BattleOutcome, Strategy } from './types';

export class PushoverStrategy implements Strategy {
  name: string = 'Pushover';

  constructor() {}

  battle() {
    // Coorperate no matter what
    return BattleOutcome.COORPERATE;
  }
}
