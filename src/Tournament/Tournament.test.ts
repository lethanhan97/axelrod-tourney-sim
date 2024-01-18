import { MockStrategy } from '../strategies/Mock';
import { Tournament } from './Tournament';

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
});
