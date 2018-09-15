/**
 * Base class for the command pattern
 *
 * @flow
 */

import type Actor, { ActorState } from './actor';

export interface Command {
  execute(actor: Actor): ActorState;
}
