import { Tournament } from './Tournament/Tournament';

const tournament = new Tournament([], 2);

console.log({
  rounds: tournament.rounds,
  strategies: tournament.strategies,
});
