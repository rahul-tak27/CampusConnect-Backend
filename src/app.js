const express = require("express");
const app = express();

// try catch error handling
app.get("/getUserData", (req, res, next) => {
  try {
    throw new Error("User data error");

    res.send("User data sent!");
  } catch (err) {
    next(err);
  }
});

app.use("/", (req, res, next) => {
  try {
    throw new Error("Home route error");

    res.send("Home page");
  } catch (err) {
    next(err);
  }
});

// Common error-handling middleware using err parameter
app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).send("Something went wrong contact support team");
});

app.listen(7777, () => {
  console.log("server is listning on port number = 7777");
});





