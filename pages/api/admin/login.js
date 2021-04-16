import dbConnect from '../utils/dbConnect.js'
import Admin from '../../../models/Admin'
import NextCors from 'nextjs-cors';

export default async function handler(req, res) {
    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     });

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