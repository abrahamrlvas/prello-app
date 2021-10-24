import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import noteRoutes from './routes/notes.routes.js';
import userRoutes from './routes/users.routes.js'
import { errorHandler, notFound } from './middlewares/error.middleware.js';

const app = express();
app.use(express.static(path.join(__dirname,"../../client/build")));


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
app.use('/api/v1', userRoutes);

app.use(notFound);
app.use(errorHandler);

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname,"../../client/build/index.html"));
  });
}

export default app;