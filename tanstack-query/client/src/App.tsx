import "./App.css";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";

import InfiniteScroll from "./components/InfiniteScroll";
// import Pagination from "./components/Pagination";
// import UseQueries from "./components/UseQueries";
// import RefetchInterval from "./components/RefetchInterval";
// import WithoutTanstackQuery from "./components/WithoutTanstackQuery";
// import WithTanstackQuery from "./components/WithTanstackQuery";
// import Deduplication from "./components/Deduplication";
import { queryClient } from "./lib/queryClient";

// import Mutation from "./components/Mutation";
// import StaleTime from "./components/StaleTime";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary
        fallback={
          <p className="p-20">
            Oops! An error occured. Please try again later.
          </p>
        }
      >
        <ReactQueryDevtools initialIsOpen={false} />
        <div>
          {/* <WithoutTanstackQuery /> */}
          {/* <WithTanstackQuery /> */}
          {/* <Deduplication /> */}
          {/* <Deduplication /> */}
          {/* <StaleTime /> */}
          {/* <RefetchInterval /> */}
          {/* <UseQueries /> */}
          {/* <Mutation /> */}
          {/* <Pagination /> */}
          <InfiniteScroll />
        </div>
      </ErrorBoundary>
    </QueryClientProvider>
  );
};

export default App;
