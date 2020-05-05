import * as React from 'react';

import { useCount } from '../hooks/counter';

export const DisplayCounter: React.FC = () => {
  const { count } = useCount();

  return <span>{count}</span>;
};
