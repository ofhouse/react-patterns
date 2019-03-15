import { Command } from './command';
import Actor from './actor';

class FireCommand implements Command {
  execute = (actor: Actor) => actor.fire();
}

export { FireCommand };
