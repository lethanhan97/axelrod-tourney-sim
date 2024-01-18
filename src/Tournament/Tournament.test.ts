import { MockStrategy } from '../strategies/Mock';
import { BattleOutcome } from '../strategies/types';
import { Tournament } from './Tournament';

const { COORPERATE, DEFECT } = BattleOutcome;

describe(Tournament.name, () => {
  describe(Tournament.prototype.setRounds.name, () => {
    it('sets rounds correctly', () => {
      const tournament = new Tournament();

      tournament.setRounds(2);
      expect(tournament.rounds).toBe(2);
    });

    it('throws error if round is <= 0', () => {
      const tournament = new Tournament();

      expect(() => {
        tournament.setRounds(0);
      }).toThrow(Error);
    });
  });

  describe(Tournament.prototype.addStrategy.name, () => {
    it('add strategy correctly', () => {
      const tournament = new Tournament();
      const strategy = new MockStrategy();

      tournament.addStrategy(strategy);
      expect(tournament.strategies).toHaveLength(1);
      expect(tournament.strategies[0]).toBe(strategy);
    });
  });

  describe(Tournament.prototype.judge.name, () => {
    it.each([
      [
        [COORPERATE, DEFECT],
        [0, 5],
      ],
      [
        [COORPERATE, COORPERATE],
        [3, 3],
      ],
      [
        [DEFECT, COORPERATE],
        [5, 0],
      ],
      [
        [DEFECT, DEFECT],
        [1, 1],
      ],
    ])('returns result correctly', (input, output) => {
      const tournament = new Tournament();

      const [outcomeA, outcomeB] = input;
      expect(tournament.judge(outcomeA, outcomeB)).toEqual(output);
    });
  });
});
