import mysql from "mysql2";
 
// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ITME18D&',
  database: 'anmeldung'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Database connected!');
});

export default db;