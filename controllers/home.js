const path=require('path');

const getHomepage=(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/user.html"));
}

module.exports=getHomepage;