//here withCounter is a function
import { useState } from "react";

import BaseComponent from "./BaseComponent";

export interface WithCounterProps {
  count: number;
  increment: () => void;
}

const withCounter = <P extends WithCounterProps>(
  Component: React.ComponentType<P>
) => {
  //prevent duplicate prop definitions
  return (props: Omit<P, keyof WithCounterProps>) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount((prev) => prev + 1);

    return <Component {...(props as P)} count={count} increment={increment} />;
  };
};

// P holds all the props the base component can take.

// Omit<P, keyof WithCounterProps> removes injected props (count, increment) so users don’t pass them manually.

// Base component defines its own additional props.

// Enhanced component automatically receives injected props + user-defined props.
export const EnhancedComponent = withCounter(BaseComponent);
