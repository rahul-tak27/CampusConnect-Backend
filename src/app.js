const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("midleware");
  // res.send("hello i am a midleware!!!!");
  next();
});
app.get(
  "/user",
  (req, res, next) => {
    console.log("handler 1");
    // res.send("this is handler 1");

    next();
    // res.send("this is handler 1");
  },
  (req, res, next) => {
    console.log("handler 2");
    next();
  },
  (req, res, next) => {
    console.log("handler 3");
    next();
    res.send("this is handler 3");
  },
);

app.listen(7777, () => {
  console.log("server is listning on port number = 7777");
});
