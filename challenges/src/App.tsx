import "./App.css";

import Users from "./components/design-patterns/render-props/Users";

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

// Hoc imports
// import NotAuthorised from "./components/design-patterns/hoc/NotAuthorised";
// import { Auth } from "./components/design-patterns/hoc/withAccessControl";

// Custom hooks imports
// import DebouncedInput from "./components/design-patterns/custom-hooks/DebouncedInput";

// Factory imports
// import ComponentFactory from "./components/design-patterns/factory/ComponentFactory";
// import { factoryData } from "./data";

// Compound Component imports
// import Modal from "./components/design-patterns/compound-component/Modal";

// Render Props imports
// import DataFetcher from "./components/design-patterns/render-props/DataFetcher";
// import User from "./components/design-patterns/render-props/User";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Design Pattern Challenges */}

      {/* Challenge 1 - Layout */}
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
      {/* <DebouncedInput /> */}

      {/* Challenge 7 - Factory */}
      {/* {factoryData.map(({ type, data }, index) => (
        <div key={index} className="flex flex-col max-w-md py-8 px-4">
          {ComponentFactory({ type, data })}
        </div>
      ))} */}

      {/* Challenge 8 - Compound Component */}
      {/* <Modal /> */}

      {/* Challenge 9 - Render Props */}
      {/* <DataFetcher
        url="https://jsonplaceholder.typicode.com/users"
        render={(user: { name: string }) => <User name={user.name} />}
      /> */}
      <Users />
    </div>
  );
};

export default App;
