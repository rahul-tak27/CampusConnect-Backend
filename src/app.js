const express = require("express");

const app = express();

// we dont send response , the request remains pending and client waiting for a response 

app.get("/user", (req, res)=>{
    console.log("user wait for response");
})

app.listen(7777, ()=>{
    console.log("server is listning on port number = 7777");
});
