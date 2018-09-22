/**
 * Observer pattern implemented as redux-like store
 *
 * http://www.thedevnotebook.com/2017/08/the-observer-pattern-in-javascript.html
 *
 * @flow
 */

type Reducer = (reducer: StoreState) => StoreState;
export type Action = () => any;

function createStore(reducer: Reducer, initialState) {
  let state = initialState;

  const listeners = [];
  const subscribe = listener => listeners.push(listener);
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
