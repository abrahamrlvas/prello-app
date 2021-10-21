import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import noteRoutes from './routes/notes.routes.js'

const app = express();


//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST", "DELETE", "PUT"],
      credentials: true
    })
  );
app.use(morgan('dev'));

//Routes
app.use('/api/v1', noteRoutes);

export default app;