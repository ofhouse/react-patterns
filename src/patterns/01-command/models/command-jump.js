// @flow

import { type Command } from './command';
import type Actor from './actor';

class JumpCommand implements Command {
  execute = (actor: Actor) => actor.jump();
}

export { JumpCommand };
