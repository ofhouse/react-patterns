import { StateReducer } from './use-accordion.types';

export const singleStateReducer: StateReducer = (state, changes) => {
  if (changes.type === 'opening') {
    return { openIndexes: changes.openIndexes.slice(-1) };
  }
  return state;
};

export const singleClosedStateReducer: StateReducer = (state, changes) => {
  console.log(changes);
  if (changes.type === 'opening') {
    return { openIndexes: changes.openIndexes.slice(-1) };
  }

  if (changes.type === 'closing') {
    return { openIndexes: [] };
  }

  return state;
};
