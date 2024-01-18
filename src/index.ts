import { Tournament } from './Tournament/Tournament';
import { FriedmanStrategy } from './strategies/Friedman';
import { PushoverStrategy } from './strategies/Pushover';
import { RandomStrategy } from './strategies/Random';
import { TitForTatStrategy } from './strategies/TitForTat';

const tournament = new Tournament([], 1000);

const strategies = [
  FriedmanStrategy,
  TitForTatStrategy,
  RandomStrategy,
  PushoverStrategy,
];

strategies.forEach((Strategy) => {
  tournament.addStrategy(new Strategy());
});

const result = tournament.startTournament();

console.log({ result });
