const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");
const User = require("./models/User");
const app = express();
const saltRounds = 10;
const secret = "4484e50158d931597ad840dfc3205299da987ebc40c4529fa68bb2cf26ae";
const PORT = 5000;
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(express.json());
app.use(cookieParser());
mongoose.connect(
  "mongodb+srv://kamaramusa56:uhZVyUTZqyBUFGfT@cluster0.y55uhmc.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/", (req, res) => {
  res.json("welome to app");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const salt = bcrypt.genSaltSync(saltRounds);

  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (err) {
    res.status(400).json(err);
  }
});

// login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({
    username,
  });
  const passOk = bcrypt.compareSync(password, userDoc.password);

  if (passOk) {
    jwt.sign(
      { username: userDoc.username, id: userDoc._id },
      secret,
      {},
      (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json("ok");
      }
    );
  } else {
    res.status(400).json("wrong credentials");
  }
});

app.get("/profile", (req, res) => {
    const {cookies}=req.cookies
  res.json(req.cookies);
});
app.listen(PORT, () => console.log(`listening to  http://localhost:${PORT}`));
