import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    category: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    }
}, { timestamps: true });

export default mongoose.model('Notes', noteSchema);