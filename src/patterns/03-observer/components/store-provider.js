/**
 * React context which provides the store to other
 *
 * @flow
 */

import * as React from 'react';

const Context = React.createContext(null);

class Provider extends React.Component {
  state = {
    store: this.props.store,
  };

  render() {
    return <Context.Provider value={this.state.store}>{this.props.children}</Context.Provider>;
  }
}

const connect = Component => () => (
  <Context.Consumer>{store => <Component store={store} />}</Context.Consumer>
);

export { Provider, connect };
