const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const User = require('../Models/userModel');
const createError = require('../util/AppError');

const secret = process.env.SECRET_KEY;

exports.signup = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if(user){
            return next(new createError('User already exists!', 400));
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        
        const newUser = await User.create({
            ...req.body,
            password: hashedPassword
        })

        const token = jwt.sign({ _id: newUser._id }, secret, { expiresIn: '90d' });

        res.status(201).json({
            status: 'success',
            message: 'User registered successfully',
            token
        })
    } catch (error) {
        next(error);
    }
}

exports.login = async (req, res, next ) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(!user) return next(new createError('User not found!', 404));

        const isPassworsValid = await bcrypt.compare(password, user.password);
        if(!isPassworsValid) return next(new createError('Invalid email or password!', 401));

        const token = jwt.sign({ _id: user._id }, secret, { expiresIn: '90d' });

        res.status(200).json({
            status: 'success',
            token,
            message: 'Logged in successfully!',
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        })

    } catch (error) {
        next(error)
    }
}