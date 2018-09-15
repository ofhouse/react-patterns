// @flow

import { type Command } from './command';
import type Actor from './actor';

class RightCommand implements Command {
  execute = (actor: Actor) => actor.goRight();
}

export { RightCommand };
