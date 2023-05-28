const express = require("express");
const cookieParser = require("cookie-parser");
const User = require("./models/User");
const bcrypt = require("bcryptjs");

const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");

const SECRET =
  "wcVqvgOurM_7jiU6rJlhGTpJx0vp_Qmy_2XI21jWIANj2b2RXHHcytZ-W86xZ4XYae3PQccjhnovbmvKCsro8ImUs_QBoy4Oxn88eQMnD1udWpiIbcaoz_t5aB9RcDYQQsWe8xSuYMQzkXvuXBmjYpdDW1XJ2_4TZDVh9XvcES8";
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT | 8080;
// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true,
// };
app.use(express.json());
app.use(cors());
app.use(cookieParser());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(" Mongodb connected.."))
  .catch((err) => console.log(err));

// app.listen(7000)

app.get("/api", async (req, res) => {
  res.send("welcome to the main page");
});

app.post("/register", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      username: req.body.username,
      password: req.body.password,
    });
  } catch (err) {
    console.log(err);
  }
});

// app.post("/register", async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const userDoc = User.create({
//       username,
//       password: bcrypt.hashSync(password, salt),
//     });
//     res.json(userDoc);
//   } catch (e) {
//     res.status(400).json(e);
//   }
// });

// app.post("/login", async (req, res) => {
//   const { username, password } = req.body;
//   const userDoc = await User.findOne({ username });
//   const passOk = bcrypt.compareSync(password, userDoc.password);
//   if (passOk) {
//     // login
//     jwt.sign({ username, id: userDoc._id }, SECRET, {}, (err, token) => {
//       if (err) throw err;

//       res.cookie("token", token).json("ok");
//     });
//   } else {
//     res.status(400).json("wrong credentials");
//   }
//   res.json(passOk);
// });

// app.get("/profile", async (req, res) => {
//   const { token } = req.cookies;

//   jwt.verify(token, SECRET, {}, (err, info) => {
//     if (err) throw err;
//     res.json(info);
//   });
// });

app.listen(PORT, () =>
  console.log(`listening to http://localhost:${PORT}/api `)
);
