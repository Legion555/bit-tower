import dbConnect from '../utils/dbConnect.js'
import Admin from '../../../models/Admin'
import Cors from 'cors'

const cors = Cors({
    methods: ['GET', 'HEAD'],
})

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
        if (result instanceof Error) {
            return reject(result)
        }

        return resolve(result)
        })
    })
}

export default async function handler(req, res) {
    await runMiddleware(req, res, cors)
    
    await dbConnect()
    try {
        //Check if email exists
        const admin = await Admin.findOne({email: req.body.email});
        if(!admin) return res.send('email not found');

        //Validate password
        let bcrypt = require('bcryptjs');        
        const validPass = await bcrypt.compare(req.body.password, admin.password);
        if(!validPass) return res.send('password is invalid');
                
        //Create and assigning token
        const jwt = require('jsonwebtoken');
        const token = jwt.sign({_id: admin._id}, process.env.TOKEN_SECRET);
        res.send({status: 'success', adminData: {...admin._doc, authToken: token}});
    } catch (error) {
        res.status(400).json({ success: false })
        res.end();
    }
}