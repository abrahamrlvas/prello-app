import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';
import connection from './db/db.js';

const port = process.env.PORT || 5000;

function main() {
  //Conexion con servidor
  app.listen(port, async () => {
    await connection;
    console.log("Server listening in port", port);
    console.log("DB is connected");
  });
}

main();