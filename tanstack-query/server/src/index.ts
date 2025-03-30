import express from "express";
import cors from "cors";

import todoRoutes from "./routes/todoRoutes";

const PORT = Number(process.env.PORT) || 3001;

const app = express();
app.use(express.json());
app.use(cors());

//routes
app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
