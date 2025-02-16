import "./App.css";

import SplitScreen from "./components/layout/split-screen/SplitScreen";
import Right from "./components/layout/split-screen/Right";
import Left from "./components/layout/split-screen/Left";

const App = () => {
  return (
    <>
      {/* Layout Component */}
      {/* Split Screen */}
      <SplitScreen leftWeight={15} rightWeight={80}>
        <Left />
        <Right />
      </SplitScreen>
    </>
  );
};

export default App;
