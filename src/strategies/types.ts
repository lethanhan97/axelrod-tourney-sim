export enum BattleOutcome {
  COORPERATE = 'COORPERATE',
  DEFECT = 'DEFECT',
}

export abstract class Strategy {
  abstract name: string;

  constructor() {}

  abstract battle(opponentPastActions: BattleOutcome[]): BattleOutcome;
}
