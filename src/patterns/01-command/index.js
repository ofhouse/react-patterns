/**
 * Example for the command pattern
 *
 * @flow
 */
import * as React from 'react';

import { type Command } from './models/command';
import { JumpCommand, FireCommand, LeftCommand, RightCommand } from './models/commands';
import Actor, { type ActorState } from './models/actor';

type Props = {};

type State = {
  actor: ActorState,
};

export default class CommandPattern extends React.Component<Props, State> {
  // The display title of the pattern
  static title = 'Command Pattern';

  // Keybindings
  keyW: Command = new JumpCommand();
  keyA: Command = new LeftCommand();
  keyS: Command = new FireCommand();
  keyD: Command = new RightCommand();

  actor: Actor = new Actor();

  state = {
    actor: this.actor.getCurrentState(),
  };

  handleInput = (event: KeyboardEvent) => {
    const keyName = event.key;

    if (keyName === 'w') {
      return this.keyW;
    } else if (keyName === 'a') {
      return this.keyA;
    } else if (keyName === 's') {
      return this.keyS;
    } else if (keyName === 'd') {
      return this.keyD;
    }

    return null;
  };

  handleKeyPress = (event: KeyboardEvent) => {
    const command = this.handleInput(event);

    if (command) {
      const actorState = command.execute(this.actor);
      this.setState({
        actor: actorState,
      });
    }
  };

  componentDidMount() {
    document.addEventListener('keypress', this.handleKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyPress, false);
  }

  render() {
    return <pre>{JSON.stringify(this.state, null, 2)}</pre>;
  }
}
