const dns = require("node:dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const express = require("express");
const app = express();

const { connectDB } = require("./config/database");

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
