
// const cookieParser = require("cookie-parser");
// const User = require("../models/User");
// const bcrypt = require("bcryptjs");

// const salt = bcrypt.genSaltSync(10);
// const jwt = require('jsonwebtoken');

// const secret = "dnf34j34jfdk344j3cxnnkn";


// module.exports.getInfo = async (req, res) => {
//   // const user = await User.find()
//   res.send("welcome to the main page");
// };

// module.exports.postInfo = async (req, res) => {
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
// };

// module.exports.postLogin = async (req, res) => {
//   const { username, password } = req.body;
//   const userDoc = await User.findOne({ username });
//   const passOk = bcrypt.compareSync(password, userDoc.password);
//   if (passOk) {
//     // login
//     jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
//       if (err) throw err;
   
//        res.cookie("token", token).json("ok")
//     });
//   } else {
//     res.status(400).json("wrong credentials");
//   }
//   res.json(passOk);
// };

// profile
// module.exports.getProfile = async (req, res) => {
//   const {token}=req.cookies;

//   jwt.verify(token, secret, {}, (err, info)=>{
//     if(err) throw err;
//     res.json(info)
//   })

// }