import { TitForTatStrategy } from './TitForTat';
import { BattleOutcome } from './types';

const { COORPERATE, DEFECT } = BattleOutcome;

describe(TitForTatStrategy.name, () => {
  const strategy = new TitForTatStrategy();

  describe(TitForTatStrategy.prototype.battle.name, () => {
    it("always copy opponent's last move", () => {
      expect(strategy.battle([])).toBe(COORPERATE);
      expect(strategy.battle([COORPERATE])).toBe(COORPERATE);
      expect(strategy.battle([COORPERATE, DEFECT])).toBe(DEFECT);
      expect(strategy.battle([COORPERATE, DEFECT, COORPERATE])).toBe(
        COORPERATE
      );
    });
  });
});
