const express = require("express");
const app = express();
const{userAuth, authAdmin} = require("./middlewares/auth");

app.use("/admin", authAdmin);

app.get("/admin/getAllData", (req, res)=>{
  res.send("Data Sent !");
});

app.get("/admin/deleteAdmin", (req, res)=>{
  res.send("Admin Deleted");
});

app.get("/user", userAuth,
  (req, res)=>{
    res.send("user Data sent");
  }
);

app.listen(7777, () => {
  console.log("server is listning on port number = 7777");
});





