const express = require("express");

const app = express();


// app.use("/user", (req, res)=>{
//     res.send({
//         name:"rahul",
//         branch:"it"
//     });
// });

app.get("/user", (req, res)=>{
    res.send({
        name:"rahul",
        branch:"it"
    });
});

app.post("/user", (req, res)=>{
    // store data in database 
    res.send({
        name:"rahul",
        branch:"IT"
    });
})

app.listen(7777, ()=>{
    console.log("server is listning on port number = 7777");
});
