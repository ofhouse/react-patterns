import React from 'react';

import { PageComponent } from '../../App';
import { CountProvider } from './hooks/counter';
import { DisplayCounter } from './components/display-counter';
import { IncrementButton } from './components/increment-button';

const ContextPattern: PageComponent = () => {
  return (
    <CountProvider>
      <div>
        <h3>React Context Pattern</h3>

        <div>
          <DisplayCounter />
        </div>
        <IncrementButton />
      </div>
    </CountProvider>
  );
};

ContextPattern.title = 'React Context Pattern';

export default ContextPattern;
