import "./App.css";

import ModalButton from "./components/custom-hook/Modal";

// split screen imports
// import SplitScreen from "./components/layout/split-screen/SplitScreen";
// import Right from "./components/layout/split-screen/Right";
// import Left from "./components/layout/split-screen/Left";

// list data imports
// import RenderList from "./components/layout/list-data/RenderList";
// import MoviesInfo from "./components/layout/list-data/MoviesInfo";
// import GamesInfo from "./components/layout/list-data/GamesInfo";
// import { games, movies } from "./data";

// modal imports
// import GamesInfo from "./components/layout/modal/GamesInfo";
// import Modal from "./components/layout/modal/Modal";
// import { games } from "./data";

// container imports
// import TodoList, { Todo } from "./components/container/TodoList";
// import CommentsList, { Comment } from "./components/container/CommentList";
// import DataSource from "./components/container/DataSource";
// import { getServerData } from "./lib";

// controlled and uncontrolled import
// import UncontrolledForm from "./components/controlled/UncontrolledForm";
// import ControlledForm from "./components/controlled/ControlledForm";

// hoc import
// import { EnhancedComponent } from "./components/hoc/withCounter";
// import { Todo } from "./components/hoc/withTodo";

// custom hook imports
// import WithoutCustomHook from "./components/custom-hook/WithoutCustomHook";
// import WithCustomHook from "./components/custom-hook/WithCustomHook";
// import MyForm from "./components/custom-hook/MyForm";
// import ThemeToggle from "./components/custom-hook/ThemeToggle";
// import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <>
      {/* <ThemeProvider> */}
      {/* Layout Pattern*/}
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

      {/* <Modal>
        <GamesInfo data={games} />
      </Modal> */}

      {/* Container Pattern*/}
      {/* <div className="flex flex-col gap-4">
        <DataSource
          getData={() =>
            getServerData<Todo>("https://jsonplaceholder.typicode.com/todos/1")
          }
          resourceName="todo"
        >
          <TodoList />
        </DataSource>
        <DataSource
          getData={() =>
            getServerData<Comment>(
              "https://jsonplaceholder.typicode.com/comments/1"
            )
          }
          resourceName="comments"
        >
          <CommentsList />
        </DataSource>
      </div> */}

      {/* Controlled & Uncontrolled components */}
      {/* <div className="flex flex-col gap-4">
        <UncontrolledForm />
        <ControlledForm />
      </div> */}

      {/* Higher Order Component */}
      {/* <EnhancedComponent title="Counter" />
        <Todo title="Todo" /> */}

      {/* Custom Hooks */}
      {/* <WithoutCustomHook /> */}
      {/* <WithCustomHook /> */}
      {/* <MyForm /> */}
      {/* <ThemeToggle />*/}
      <ModalButton />

      {/* </ThemeProvider> */}
    </>
  );
};

export default App;
