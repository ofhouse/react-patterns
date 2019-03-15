import { Command } from './command';
import Actor from './actor';

class LeftCommand implements Command {
  execute = (actor: Actor) => actor.goLeft();
}

export { LeftCommand };
