import Notes from '../models/notes.models.js';

export const getAllNotes = async (req, res) => {
    const notes = await Notes.find();
    if (!notes) {
        return res.status(404).json({ message: 'Notes Not Found' })
    }
    return res.status(200).json(notes);
}

export const getNoteById = async (req, res) => {
    const { id } = req.params
    const note = await Notes.findById(id);
    if (!note) {
        return res.status(404).json({ message: 'Notes Not Found' })
    }
    return res.status(200).json(note);
}

export const createNote = async (req, res) => {
    const { title, content, category } = req.body;

    if (!title || !content || !category) {
        return res.status(400).json({ message: "Please fill all the fields" })
    }
    const newNote = new Notes({ user: req.user._id, title, content, category });
    await newNote.save();
    return res.status(201).json({ message: 'Note created successfully' });
}

export const updateNote = async (req, res) => {
    const { id } = req.params;
    const note = await Notes.findById(id);
    if (note.user.toString() !== req.user._id.toString()) {
        return res.status(400).json({ message: "You can't perform this action" })
    }
    const updateNote = await Notes.findByIdAndUpdate(note._id, req.body, { new: true });
    await updateNote.save();
    return res.status(200).json({ message: 'Note updated successfully' });
}

export const deleteNote = async (req, res) => {
    const { id } = req.params;
    const note = await Notes.findById(id);
    if (note.user.toString() !== req.user._id.toString()) {
        return res.status(400).json({ message: "You can't perform this action" })
    }
    await Notes.findByIdAndDelete(note._id);
    return res.status(200).json({ message: 'Note deleted successfully' });
}