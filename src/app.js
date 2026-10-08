const express = require("express");

const app = express();

app.use("/test", (req, res)=>{
    res.send("Namste! this is Testing page");
});

app.use("/product", (req, res)=>{
    res.send("Namste! this is Product Page");
});

app.use("/users", (req, res)=>{
    res.send("Namste! this is Users Page");
})

app.use("/", (req, res)=>{
    res.send("Namste! this is Home Page");
});

app.listen(7777, ()=>{
    console.log("server is listning on port number = 7777");
});
