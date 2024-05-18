import express from "express";
import cors from "cors";

import apiRouter from "./routes/index";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use("/api/v1", apiRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
