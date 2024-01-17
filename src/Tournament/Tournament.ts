export class Tournament {
  // TODO: make strategies type once we have interface
  strategies: unknown[] = [];
  rounds: number = 0;

  constructor(strategies?: unknown[], rounds?: number) {
    this.strategies = strategies || [];
    rounds && this.setRounds(rounds);
  }

  addStrategy(strategy: unknown) {
    this.strategies.push(strategy);
  }

  setRounds(rounds: number) {
    if (rounds <= 0) {
      throw new Error('There needs to be at least 1 round');
    }

    this.rounds = rounds;
  }
}
