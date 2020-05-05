import * as React from 'react';

import {
  StateReducer,
  AccordionIndexKey,
  AccordionState,
  displayState,
} from './types.use-accordion';

const defaultStateReducer: StateReducer = (state) => {
  return state;
};

interface UseAccordionProps {
  stateReducer?: StateReducer;
  openIndexes?: AccordionIndexKey[];
  initialOpenIndexes?: AccordionIndexKey[];
  onStateChange?: (allChanges: AccordionState) => void;
}

function useAccordion({
  stateReducer = defaultStateReducer,
  openIndexes,
  initialOpenIndexes = [],
  onStateChange,
}: UseAccordionProps = {}) {
  const [state, dispatch] = React.useReducer<StateReducer>(stateReducer, {
    openIndexes: initialOpenIndexes,
  });

  const handleItemClick = React.useCallback(
    (index: AccordionIndexKey) => {
      const closing = state.openIndexes.includes(index);
      const changes = {
        type: closing ? displayState.closing : displayState.opening,
        openIndexes: closing
          ? state.openIndexes.filter((i) => i !== index)
          : [...state.openIndexes, index],
      };
      dispatch(changes);
    },
    [state]
  );

  const getState = React.useCallback(
    (_state: AccordionState = state) => {
      return {
        ..._state,
        openIndexes: openIndexes === undefined ? _state.openIndexes : openIndexes,
      };
    },
    [state, openIndexes]
  );

  React.useEffect(() => {
    if (onStateChange) {
      onStateChange(state);
    }
  }, [state]);

  return { handleItemClick, openIndexes: getState().openIndexes };
}

export { useAccordion };
