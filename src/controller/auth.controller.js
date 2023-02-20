import db from '../db/sqlite3-connection';
import jwt from 'jsonwebtoken';
import config from '../config';

// debe importarse el usario primeramente

export const logIn = async (req, res)=>{
    const {username, password} = req.body;

    db.findUser(req.body.username, req.body.password, (result)=>{
        if(!result){
            res.status(401).json({token : null, message : 'Invalid credentials'})
        }
        const token = jwt.sign(req.body, "key");
        res.status(200).json({token : token})
    });

    //console.log(req.body);
}