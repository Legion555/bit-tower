import dbConnect from '../utils/dbConnect.js'
import Admin from '../../../models/Admin'
import Cors from 'cors'
import initMiddleware from '../../../lib/init-middleware'

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  })
)

export default async function handler(req, res) {
    await cors(req, res)

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