import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    lastname: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    }
});

export default mongoose.model('Users', userSchema);