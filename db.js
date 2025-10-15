const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'JEET5870', // ← your MySQL password
  database: 'hospital_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

module.exports = db;
