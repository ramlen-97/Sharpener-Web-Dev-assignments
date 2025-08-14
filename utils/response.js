const sendErrorResponse=(res,statusCode,errorMessage)=>{
    let message=errorMessage;
    return res.status(statusCode).json({status:false,message});
}

const sendResponse=(res,statusCode,data)=>{
    return res.status(statusCode).json({status:true,data})
}

module.exports={
    sendErrorResponse,
    sendResponse
}