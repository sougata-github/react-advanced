import "./App.css";

import SplitScreen from "./components/design-patterns/dashboard-layout/SplitScreen";
import Sidebar from "./components/design-patterns/dashboard-layout/Sidebar";
import Content from "./components/design-patterns/dashboard-layout/Content";
import Header from "./components/design-patterns/dashboard-layout/Header";
import Footer from "./components/design-patterns/dashboard-layout/Footer";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Design Pattern Challengs */}
      {/* Challenge 1 - Dashboard Layout */}
      <Header />
      <SplitScreen leftWeight={3} rightWeight={60}>
        <Sidebar />
        <Content />
      </SplitScreen>
      <Footer />
    </div>
  );
};

export default App;
