const authAdmin = (req, res, next)=>{
    console.log("authAdmin get checke !!");
    const key = "xyz"
    const isadminAutharized = key === "xyz";

    if(!isadminAutharized){
        res.status(401).send("Unautharized Request !!");
    }
    else{
        next();
    }
}

const userAuth = (req, res, next)=>{
    console.log("userAuth get checke !!");
    const key = "xyz";
    const isadminAutharized = key === "xyz.2";

    if(!isadminAutharized){
        res.status(401).send("Unautharized user Request !!");
    }
    else{
        next();
    }
}

module.exports = {
    authAdmin,
    userAuth
}