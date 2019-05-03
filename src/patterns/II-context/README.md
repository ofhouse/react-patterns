# React Context

Pattern for efficient usage of React Context.
Taken from: https://kentcdodds.com/blog/how-to-use-react-context-effectively

## Key learnings

### 1. Initialize React.useContext with undefined

```tsx
type CountContextValue = {
  count: number;
  setCount: (updater: (count: number) => number) => void;
};

const CountContext = React.createContext<CountContextValue | undefined>(undefined);
```

### 2. Check for undefined context in hook

```tsx
export function useCount() {
  const context = useContext(CountContext);

  if (!context) {
    throw new Error('useCount must be used within a CountProvider');
  }

  ...
}
```
