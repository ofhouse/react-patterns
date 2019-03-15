/**
 * React context which provides the store to other
 */

import * as React from 'react';

import { StoreProps, Store } from '../store';

const Context = React.createContext<Store>({
  subscribe: () => {},
  getState: () => {},
});

class Provider extends React.Component<StoreProps> {
  state = {
    store: this.props.store,
  };

  render() {
    return <Context.Provider value={this.state.store}>{this.props.children}</Context.Provider>;
  }
}

const connect = (Component: React.ComponentType<StoreProps>) => () => (
  <Context.Consumer>{store => <Component store={store} />}</Context.Consumer>
);

export { Provider, connect };
