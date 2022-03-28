const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

//Register New User

router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PWD_PASSPHRASE).toString(),
        email: req.body.email
    })
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json(error)
    }
});

//Login User

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username
        })

        if(!user) { 
            res.status(401).json('Wrong Credentials! No User Found');
            return;
        }

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PWD_PASSPHRASE);

        const pwd = hashedPassword.toString(CryptoJS.enc.Utf8);

        if(pwd !== req.body.password) {
            res.status(401).json('Wrong Credentials! Wrong Password');
            return;
        };

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, 
        process.env.JWT_SECRETKEY,
        { expiresIn: '3d' }
        )

        const { password, ...others } = user._doc;

        res.status(200).json({...others, accessToken});
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;