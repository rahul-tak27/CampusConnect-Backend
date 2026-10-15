const dns = require("node:dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const express = require("express");
const app = express();

require("./config/database")

app.listen(7777, () => {
  console.log("server is listning on port number = 7777");
});





