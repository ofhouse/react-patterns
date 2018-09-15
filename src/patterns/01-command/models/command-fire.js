// @flow

import { type Command } from './command';
import type Actor from './actor';

class FireCommand implements Command {
  execute = (actor: Actor) => actor.fire();
}

export { FireCommand };
