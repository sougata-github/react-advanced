import "./App.css";

import GamesInfo from "./components/layout/modal/GamesInfo";
import Modal from "./components/layout/modal/Modal";
import { games } from "./data";

// split screen imports
// import SplitScreen from "./components/layout/split-screen/SplitScreen";
// import Right from "./components/layout/split-screen/Right";
// import Left from "./components/layout/split-screen/Left";

// list data imports
// import RenderList from "./components/layout/list-data/RenderList";
// import MoviesInfo from "./components/layout/list-data/MoviesInfo";
// import GamesInfo from "./components/layout/list-data/GamesInfo";
// import { games, movies } from "./data";

const App = () => {
  return (
    <>
      {/* Layout Component */}

      {/* Split Screen */}
      {/* <SplitScreen leftWeight={15} rightWeight={80}>
        <Left />
        <Right />
      </SplitScreen> */}

      {/* List Data */}
      {/* <div className="px-10 grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto">
        <RenderList
          data={games}
          resourceName={"games"}
          dataToRender={GamesInfo}
        />
        <RenderList
          data={movies}
          resourceName={"movies"}
          dataToRender={MoviesInfo}
        />
      </div> */}

      <Modal>
        <GamesInfo data={games} />
      </Modal>
    </>
  );
};

export default App;
