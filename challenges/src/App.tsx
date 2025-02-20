import "./App.css";

//Product Display imports
import ProductInfo from "./components/design-patterns/render-list/ProductInfo";
import RenderList from "./components/design-patterns/render-list/RenderList";
import { clothing, electronics, homeGoods } from "./data";

// Dashboard Layout imports
// import SplitScreen from "./components/design-patterns/dashboard-layout/SplitScreen";
// import Sidebar from "./components/design-patterns/dashboard-layout/Sidebar";
// import Content from "./components/design-patterns/dashboard-layout/Content";
// import Header from "./components/design-patterns/dashboard-layout/Header";
// import Footer from "./components/design-patterns/dashboard-layout/Footer";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Design Pattern Challengs */}

      {/* Challenge 1 - Dashboard Layout */}
      {/* <Header />
      <SplitScreen leftWeight={3} rightWeight={60}>
        <Sidebar />
        <Content />
      </SplitScreen>
      <Footer /> */}

      {/* Challenge 2 - Product Display Application */}

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <RenderList
          data={electronics}
          resourceName="product"
          dataToRender={ProductInfo}
        />
        <RenderList
          data={clothing}
          resourceName="product"
          dataToRender={ProductInfo}
        />
        <RenderList
          data={homeGoods}
          resourceName="product"
          dataToRender={ProductInfo}
        />
      </div>
    </div>
  );
};

export default App;
