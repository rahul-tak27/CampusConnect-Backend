const dns = require("node:dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const express = require("express");
const app = express();

const { connectDB } = require("./config/database");

const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const user = new User({
    firstName: "Ramdyal",
    lastName: "Tak",
    emailId: "ramdyal2007@gmail.com",
    password: "ramdyal@123",
  });

  try{
     await user.save();

     res.send("User Added Successfully !!");
  }
  catch(err){
    res.status(400).send("Bad Request !");
  } 
});

connectDB()
  .then(() => {
    console.log("Database connected successfully!");

    app.listen(7777, () => {
      console.log("server is listning on port number = 7777");
    });
  })
  .catch((err) => {
    console.log("Database connection failed!");
  });
