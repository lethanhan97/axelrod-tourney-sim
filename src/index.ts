import { Tournament } from './Tournament/Tournament';
import { FriedmanStrategy } from './strategies/Friedman';
import { PushoverStrategy } from './strategies/Pushover';
import { RandomStrategy } from './strategies/Random';

const tournament = new Tournament([], 20);

const strategies = [FriedmanStrategy, RandomStrategy, PushoverStrategy];
strategies.forEach((Strategy) => {
  tournament.addStrategy(new Strategy());
});

tournament.startTournament();
