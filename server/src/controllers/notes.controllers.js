import Notes from '../models/notes.models.js'

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
    const newNote = new Notes(req.body);
    newNote.save();
    return res.status(201).json({ message: 'Note created successfully' });
}

export const updateNote = async (req, res) => {
    const { id } = req.params;
    const updateNote = Notes.findByIdAndUpdate(id, req.body, { new: true } );
    await updateNote.save();
    return res.status(200).json({ message: 'Note updated successfully' });
}

export const deleteNote = async (req, res) => {
    const { id } = req.params;
    await Notes.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Note deleted successfully' });
}