import { WithCounterProps } from "./withCounter";

interface Props extends WithCounterProps {
  title: string;
}

const BaseComponent = ({ count, increment, title }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default BaseComponent;
