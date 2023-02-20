import jwt from 'jsonwebtoken';
import db from '../db/redis-connection';
import config from '../config';


export const verifyToken = async (res, req, next) =>{
    try {
        const token =  req.header['token'];

        if (!token){
            res.status(403).json({message : 'Forbiden'})
        }
    
        const decode = jwt.verify(token, "key");
        const user = db.findByUsername(decode.username);
    
        if(!user){
            return res.status(404).json({message : "user not foun"})
        }
        next();
    } catch (error) {
        return (res.status(401).json({message : 'Forbiden'}));
    }
}