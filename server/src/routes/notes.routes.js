import { Router } from 'express';
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from '../controllers/notes.controllers.js';
const router = Router();

router
    .route('/notes')
    .get(getAllNotes)
    .post(createNote);

router
    .route('/notes/:id')
    .get(getNoteById)
    .put(updateNote)
    .delete(deleteNote);

export default router;