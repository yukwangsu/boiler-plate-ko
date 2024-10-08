const mongoose = require("mongoose");

const userSchma = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    //공백 제거
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0,
  },
  image: String,
  token: {
    type: String,
  },
  //토큰 유효기간
  tokenExp: {
    type: Number,
  },
});

//모델의 이름: User, 스키마: userSchma
const User = mongoose.model("User", userSchma);

//모델을 다른 곳에서 사용하기 위해 exports함.
module.exports = { User };
