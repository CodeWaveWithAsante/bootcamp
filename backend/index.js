import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import dbConnection from "./dbConfig/index.js";
import routes from "./routes/index.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// DB CONNECTION
dbConnection();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api", routes);

app.listen(PORT, () => {
  console.log("server started on port " + PORT);
});
