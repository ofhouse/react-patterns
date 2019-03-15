import { StoreState } from '.';

/**
 * Observer pattern implemented as redux-like store
 *
 * http://www.thedevnotebook.com/2017/08/the-observer-pattern-in-javascript.html
 */

type Reducer = (reducer: StoreState, action: Action) => StoreState;

export type Action = {
  type: string;
  [key: string]: any;
};

type Listener = () => void;

export interface Store {
  subscribe: (listener: Listener) => void;
  getState: () => any;
}

export interface StoreProps {
  store: Store;
}

function createStore(reducer: Reducer, initialState: any) {
  let state = initialState;

  const listeners: Listener[] = [];
  const subscribe = (listener: Listener) => listeners.push(listener);
  const getState = (): typeof initialState => state;
  const dispatch = (action: Action) => {
    state = reducer(state, action);
    listeners.forEach(l => l());
  };

  return {
    subscribe,
    getState,
    dispatch,
  };
}

export { createStore };
