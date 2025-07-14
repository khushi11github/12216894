
const jwt = require('jsonwebtoken');
const secretkey ='xyz1234';
const authenticate =(req,res,next)=>{
    const token = req.headers['authorization'];
    if(!token){
        return res.status(401).json({message: 'No token provided'});
    }
        
    const res =jwt.verify(token,secretkey)
    if(!res){
        return res.status(403).json({message: 'Invalid token'});
    }
    req.user = res;
    next();
}