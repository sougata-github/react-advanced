import "./App.css";

import DebouncedInput from "./components/design-patterns/custom-hooks/DebouncedInput";

// Dashboard Layout imports
// import SplitScreen from "./components/design-patterns/dashboard-layout/SplitScreen";
// import Sidebar from "./components/design-patterns/dashboard-layout/Sidebar";
// import Content from "./components/design-patterns/dashboard-layout/Content";
// import Header from "./components/design-patterns/dashboard-layout/Header";
// import Footer from "./components/design-patterns/dashboard-layout/Footer";

// Product Display imports
// import ProductInfo from "./components/design-patterns/render-list/ProductInfo";
// import RenderList from "./components/design-patterns/render-list/RenderList";
// import { clothing, electronics, homeGoods } from "./data";

// Container imports
// import ProductList from "./components/design-patterns/container-component/ProductList";
// import { Product } from "./components/design-patterns/container-component/ProductInfo";
// import DataSource from "./components/design-patterns/container-component/DataSource";
// import { getProductsData } from "./lib";

// Controlled import
// import ControlledForm from "./components/design-patterns/controlled/ControlledForm";

// hoc import
// import NotAuthorised from "./components/design-patterns/hoc/NotAuthorised";
// import { Auth } from "./components/design-patterns/hoc/withAccessControl";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Design Pattern Challenges */}

      {/* Challenge 1 - Dashboard Layout */}
      {/* <Header />
      <SplitScreen leftWeight={3} rightWeight={60}>
        <Sidebar />
        <Content />
      </SplitScreen>
      <Footer /> */}

      {/* Challenge 2 - Product Display Application */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2">
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
      </div> */}

      {/* Challenge 3 - Container Component */}
      {/* <DataSource
        getData={() =>
          getProductsData<Product[]>("https://fakestoreapi.com/products")
        }
        resourceName="products"
      >
        <ProductList />
      </DataSource> */}

      {/* Challenge 4 - Controlled form */}
      {/* <ControlledForm /> */}

      {/* Challenge 5 - HOC */}
      {/* <Auth
        roles={["admin", "moderator"]}
        fallbackComponent={NotAuthorised}
        message="Hello, Admin"
        userName="Sougata"
        userPermissions={["view", "update", "delete"]}
      /> */}

      {/* Challenge 6 - Custom Hooks */}
      <DebouncedInput />
    </div>
  );
};

export default App;
