import React, { createContext, useState, useMemo, useContext } from 'react';

////////////////////////////////////////////////////////////////////////////////
// Context
type CountContextValueT = {
  count: number;
  setCount: (updater: (count: number) => number) => void;
};

const CountContext = createContext<CountContextValueT | undefined>(undefined);

////////////////////////////////////////////////////////////////////////////////
// Provider
type CountProviderPropsT = {
  value?: CountContextValueT;
  children: React.ReactNode;
};

export function CountProvider(props: CountProviderPropsT) {
  const [count, setCount] = useState(0);
  const value = useMemo(() => {
    return {
      count,
      setCount,
    };
  }, [count]);

  return <CountContext.Provider value={value} {...props} />;
}

////////////////////////////////////////////////////////////////////////////////
// Hook
export function useCount() {
  const context = useContext(CountContext);

  if (!context) {
    throw new Error('useCount must be used within a CountProvider');
  }

  const { count, setCount } = context;
  const increment = () => setCount(c => c + 1);

  return {
    count,
    increment,
  };
}
