import dotenv from 'dotenv';
import path from 'path'
dotenv.config();
import app from './app.js';
import db from './db/db.js';
import express from 'express'

const port = process.env.PORT || 5000;

function main() {
  //Conexion con servidor
  app.listen(port, async () => {
    console.log("Server listening in port", port);
    console.log("DB is connected,", (await db).connection.host);
  });
}


main();