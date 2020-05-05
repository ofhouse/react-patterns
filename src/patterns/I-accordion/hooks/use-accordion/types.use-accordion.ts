export type AccordionIndexKey = number | string;

export const displayState = {
  opening: 'opening',
  closing: 'closing',
} as const;

export interface AccordionState {
  openIndexes: AccordionIndexKey[];
}

export interface AccordionChanges extends AccordionState {
  type: keyof typeof displayState;
}

export type StateReducer = (
  actualState: AccordionState,
  changesObject: AccordionChanges
) => AccordionState;
