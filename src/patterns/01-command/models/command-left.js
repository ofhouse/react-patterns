// @flow

import { type Command } from './command';
import type Actor from './actor';

class LeftCommand implements Command {
  execute = (actor: Actor) => actor.goLeft();
}

export { LeftCommand };
