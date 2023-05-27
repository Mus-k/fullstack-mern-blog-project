const express = require("express");
const cookieParser = require("cookie-parser");

const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const routes = require("./routes/Route");

const app = express();
const PORT = process.env.PORT | 7000;

// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true,
// };
app.use(express.json());
app.use(cors());
app.use(cookieParser());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(" MongodB connected.."))
  .catch((err) => console.log(err));
app.use(routes);
// app.listen(7000)

app.listen(PORT, () =>
  console.log(`listening to http://localhost:${PORT}/api `)
);
