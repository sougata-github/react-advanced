import "./App.css";

import { QueryClientProvider } from "@tanstack/react-query";

// import WithoutTanstackQuery from "./components/WithoutTanstackQuery";
// import WithTanstackQuery from "./components/WithTanstackQuery";
// import Deduplication from "./components/Deduplication";
import { queryClient } from "./lib/queryClient";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        {/* <WithoutTanstackQuery /> */}
        {/* <WithTanstackQuery /> */}
        {/* <Deduplication />
        <Deduplication /> */}
      </div>
    </QueryClientProvider>
  );
};

export default App;
