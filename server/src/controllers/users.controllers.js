import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/users.models.js';
import { comparePassword } from '../utils/comparePassword.js';

export const registerUser = async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    const userExists = await User.findOne({ username });
    if (userExists) {
        return res.status(404).json({ message: 'User alredy exists' })
    }
    const newUser = new User(req.body);
    const newPassword = await bcrypt.hash(password, 10);
    newUser.password = newPassword;
    const user = newUser.save();
    if (user) {
        return res.status(201).json({ message: 'User created succcessfully' })
    } else {
        return res.status(404).json({ message: 'User Not Found' })
    }
}

export const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user && await comparePassword(password, user.password)) {
        const token = jwt.sign({
            _id: user._id,
            name: user.name,
            lastname: user.lastname,
            username: user.username,
            isAdmin: user.isAdmin
        }, process.env.JWT_SECRET, {
            expiresIn: '1d'
        })
        return res.status(200).json({ token });
    } else {
        return res.status(404).json({ message: 'User or Password Not Found' })
    }
}