import React from 'react';

import { useCount } from '../hooks/counter';

export const IncrementButton: React.FC = () => {
  const { increment } = useCount();

  return <button onClick={() => increment()}>+1</button>;
};
