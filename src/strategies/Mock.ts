import { BattleOutcome, Strategy } from './types';

export class MockStrategy implements Strategy {
  name: string = 'mock strategy for testing';

  constructor() {}

  battle() {
    return BattleOutcome.COORPERATE;
  }
}
