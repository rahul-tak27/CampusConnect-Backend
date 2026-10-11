const express = require("express");

const app = express();

// we dont send response , the request remains pending and client waiting for a response

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
    // res.send("this is handler 3");
    next();
  },
);

app.listen(7777, () => {
  console.log("server is listning on port number = 7777");
});
