import { AccordionState, AccordionChanges } from './accordion';

export function singleStateReducer(
  state: AccordionState,
  changes: AccordionChanges
): AccordionState {
  if (changes.type === 'opening') {
    return { openIndexes: changes.openIndexes.slice(-1) };
  }
  return state;
}

export function singleClosedStateReducer(
  state: AccordionState,
  changes: AccordionChanges
): AccordionState {
  if (changes.type === 'opening') {
    return { openIndexes: changes.openIndexes.slice(-1) };
  }

  if (changes.type === 'closing') {
    return { openIndexes: [] };
  }

  return state;
}
