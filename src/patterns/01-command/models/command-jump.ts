import { Command } from './command';
import Actor from './actor';

class JumpCommand implements Command {
  execute = (actor: Actor) => actor.jump();
}

export { JumpCommand };
