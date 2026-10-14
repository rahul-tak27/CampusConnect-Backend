const express = require("express");

const app = express();

// why do we need middleware ....... middele ware comes into picture from here 

app.get("/admin/getAllData", (req, res, next) => {
  console.log("midleware");
  const key = "xwyz";
  if(key === "xwyz"){
    res.send("user are login successfully and send all data");
  }
  else{
    res.status(401).send("fake user are detected")
  }
  
});

app.get("/admin/deleteUser", (req, res, next) => {
  console.log("midleware");
  const key = "xcdz";
  if(key === "xwyz"){
    res.send("user are login successfully and send all data");
  }
  else{
    res.status(401).send("fake user are detected on delete")
  }
  
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
