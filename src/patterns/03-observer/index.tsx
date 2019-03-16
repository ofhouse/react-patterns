/**
 * Observer pattern
 */

import React from 'react';

import { createStore, Action } from './store';
import { Provider } from './components/store-provider';
import MessagesView from './components/messages-view';

export interface Message {
  text: String;
}

export type StoreState = {
  messages: Message[];
};

function reducer(state: StoreState, action: Action) {
  // eslint-disable-next-line
  switch (action.type) {
    case 'ADD_MESSAGE': {
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            text: action.messageText,
          },
        ],
      };
    }
  }

  return state;
}

const initialState: StoreState = { messages: [] };
const store = createStore(reducer, initialState);

type Props = {};
type State = {
  message: string;
};

export default class ObserverPattern extends React.Component<Props, State> {
  static title = 'Observer Pattern';

  state = {
    message: '',
  };

  handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const messageText = this.state.message;

    store.dispatch({
      type: 'ADD_MESSAGE',
      messageText,
    });

    this.setState({
      message: '',
    });
  };

  render() {
    return (
      <Provider store={store}>
        <h3>Messages</h3>
        <MessagesView />
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.message}
              onChange={e => this.setState({ message: e.target.value })}
            />
            <button type="submit">Add Message</button>
          </form>
        </div>
      </Provider>
    );
  }
}
