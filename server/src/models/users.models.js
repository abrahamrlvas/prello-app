import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'
const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    lastname: {
        type: String
    },
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    picture: {
        type: String,
        default: "https://electronicssoftware.net/wp-content/uploads/user.png"
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    }
}, { timestamps: true });

export default mongoose.model('Users', userSchema);