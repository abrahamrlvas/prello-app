import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    category: {
        type: String
    }
});

export default mongoose.model('Notes', noteSchema);