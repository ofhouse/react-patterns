/**
 * Base class for the command pattern
 */

import Actor, { ActorState } from './actor';

export interface Command {
  execute(actor: Actor): ActorState;
}
