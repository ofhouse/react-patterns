import * as React from 'react';

import { connect } from './store-provider';
import { StoreProps } from '../store';
import { Message } from '..';

interface Props extends StoreProps<{ messages: Message[] }> {}

class MessagesView extends React.Component<Props> {
  componentDidMount() {
    this.props.store.subscribe(() => this.forceUpdate());
  }

  render() {
    const { messages } = this.props.store.getState();

    return (
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message.text}</li>
        ))}
      </ul>
    );
  }
}
export default connect(MessagesView);
