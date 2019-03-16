import React from 'react';

enum DisplayState {
  opening = 'opening',
  closing = 'closing',
}

type RenderProps = {
  openIndexes: Array<string>;
  handleItemClick: (index: string) => void;
};

interface Props {
  stateReducer: (actualState: AccordionState, changesObject: AccordionChanges) => AccordionState;
  children: (props: RenderProps) => React.ReactNode;
  onStateChange?: (allChanges: AccordionState) => void;
  openIndexes?: Array<string>;
  initialOpenIndexes?: Array<string>;
}

export interface AccordionState {
  openIndexes: Array<string>;
}

export interface AccordionChanges extends AccordionState {
  type: DisplayState;
}

export class Accordion extends React.Component<Props, AccordionState> {
  static defaultProps = {
    stateReducer: (state: AccordionState, changes: AccordionChanges) => state,
    onStateChange: () => {},
  };

  state = {
    openIndexes: this.props.initialOpenIndexes || [],
  };

  getState(state: AccordionState = this.state): AccordionState {
    return {
      ...state,
      openIndexes:
        this.props.openIndexes === undefined ? state.openIndexes : this.props.openIndexes,
    };
  }

  internalSetState(changes: (state: AccordionState) => AccordionChanges, callback = () => {}) {
    let newState: AccordionState;
    this.setState(
      state => {
        const actualState = this.getState(state);
        const changesObject = typeof changes === 'function' ? changes(actualState) : changes;
        newState = this.props.stateReducer(actualState, changesObject);

        return newState;
      },
      () => {
        if (this.props.onStateChange) {
          this.props.onStateChange(newState);
        }
        callback();
      }
    );
  }

  handleItemClick = (index: string) => {
    this.internalSetState(state => {
      const closing = state.openIndexes.includes(index);
      return {
        type: closing ? DisplayState.closing : DisplayState.opening,
        openIndexes: closing
          ? state.openIndexes.filter(i => i !== index)
          : [...state.openIndexes, index],
      };
    });
  };

  render() {
    return this.props.children({
      openIndexes: this.getState().openIndexes,
      handleItemClick: this.handleItemClick,
    });
  }
}
