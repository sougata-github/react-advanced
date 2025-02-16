import "./App.css";

import SplitScreen from "./components/SplitScreen";
import Right from "./components/Right";
import Left from "./components/Left";

const App = () => {
  return (
    <>
      <SplitScreen leftWeight={15} rightWeight={80}>
        <Left />
        <Right />
      </SplitScreen>
    </>
  );
};

export default App;
