import React from 'react';
import { Accordion } from './components/accordion';
import { Flex, FlexChild } from '../../components/base/flex';
import { singleClosedStateReducer } from './components/state-reducers';
import { PageComponent } from '../../types';

interface AccordionItemProps {
  title: string;
  onClick: () => void;
  isOpen: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, onClick, isOpen, children }) => (
  <Flex flexDirection="column">
    <FlexChild>
      <button onClick={onClick}>{title}</button>
    </FlexChild>
    {isOpen ? <FlexChild>{children}</FlexChild> : null}
  </Flex>
);

const AccordionPattern: PageComponent = () => (
  <Accordion stateReducer={singleClosedStateReducer} initialOpenIndexes={['1']}>
    {({ handleItemClick, openIndexes }) => (
      <div>
        <AccordionItem
          title="Test 1"
          onClick={() => handleItemClick('1')}
          isOpen={openIndexes.includes('1')}
        >
          <div>Content Test 1</div>
        </AccordionItem>

        <AccordionItem
          title="Test 2"
          onClick={() => handleItemClick('2')}
          isOpen={openIndexes.includes('2')}
        >
          <div>Content Test 2</div>
        </AccordionItem>
      </div>
    )}
  </Accordion>
);

AccordionPattern.title = 'Accordion Pattern';

export default AccordionPattern;
