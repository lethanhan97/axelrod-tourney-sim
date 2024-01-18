import { FriedmanStrategy } from './Friedman';
import { BattleOutcome } from './types';

const { COORPERATE, DEFECT } = BattleOutcome;

describe(FriedmanStrategy.name, () => {
  const strategy = new FriedmanStrategy();

  describe(FriedmanStrategy.prototype.battle.name, () => {
    it('always coorperate as long as opponent coorperates', () => {
      expect(strategy.battle([])).toBe(COORPERATE);
      expect(strategy.battle([COORPERATE])).toBe(COORPERATE);
      expect(strategy.battle([COORPERATE, COORPERATE])).toBe(COORPERATE);
      expect(strategy.battle([COORPERATE, COORPERATE, COORPERATE])).toBe(
        COORPERATE
      );
    });

    it('always defects as long as opponent defects one time', () => {
      expect(strategy.battle([])).toBe(COORPERATE);
      expect(strategy.battle([DEFECT])).toBe(DEFECT);
      expect(strategy.battle([DEFECT, COORPERATE])).toBe(DEFECT);
      expect(strategy.battle([COORPERATE, DEFECT, COORPERATE])).toBe(DEFECT);
    });
  });
});
