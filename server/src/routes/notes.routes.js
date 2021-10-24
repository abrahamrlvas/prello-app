import { Router } from 'express';
import { createNote, deleteNote, getAllNotes, getNoteById, updateNote } from '../controllers/notes.controllers.js';
import { isAuthenticated } from '../middlewares/authToken.js';
const router = Router();

router
    .route('/notes')
    .get(isAuthenticated, getAllNotes)
    .post(isAuthenticated, createNote);

router
    .route('/notes/:id')
    .get(getNoteById)
    .put(isAuthenticated, updateNote)
    .delete(isAuthenticated, deleteNote);

export default router;