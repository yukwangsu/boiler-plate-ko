const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");

const config = require("./config/key");
const { User } = require("./modles/User");

//application/x-www-form-urlencoded 타입으로 된 것을 분석해서 가져올 수 있게함.
app.use(bodyParser.urlencoded({ extended: true }));
//application/json 타입으로 된 것을 분석해서 가져올 수 있게함.
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World! nodemon added!!");
});

app.post("/register", (req, res) => {
  //회원 가입 할 때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터 베이스에 넣어준다.
  const user = new User(req.body);

  user
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch((err) => res.send(400).json({ success: false, msg: err }));

  // user.save((err, userInfo) => {
  //   if (err) return res.json({ success: false, err });
  //   return res.status(200).json({
  //     success: true,
  //   });
  // });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
