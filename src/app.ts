import express from "express";
import helmet from "helmet";
import cors from "cors";
import { connect } from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import { routes } from "./routes";
import path from "path";
import bodyParser from "body-parser";

//load env
dotenv.config();

const port = process.env.PORT || 3121;
const mongoUri = process.env.MONGODB_URI || "";
// init express app
const app = express();

//apply public path
app.use(express.static(path.join(__dirname, "public")));
// apply view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//middlewares
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//connect database
run().catch((err) => console.log(err));
async function run() {
  await connect(mongoUri).then((r) => {
    if (r.connection.readyState) {
      console.log(`Database connected`);
    }
  });
}
app.use("/", routes);
//run server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
