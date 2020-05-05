import * as React from 'react';

import { CountProvider } from './hooks/counter';
import { DisplayCounter } from './components/display-counter';
import { IncrementButton } from './components/increment-button';
import { PageComponent } from '../../types/types';

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
