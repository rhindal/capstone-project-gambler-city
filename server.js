import express from 'express';
import mysql from 'mysql2';
import bcrypt from 'bcryptjs'; // Optional: for hashing passwords
import bodyParser from 'body-parser'; // For parsing incoming request bodies

const app = express();
const port = 3000;

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Use your MySQL username
  password: '', // Use your MySQL password
  database: 'gambling_site',
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to the database!');
});

app.use(bodyParser.json());

// Register route (simplified)
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).send('Error hashing password');

    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(query, [username, hashedPassword], (err, result) => {
      if (err) return res.status(500).send('Error creating user');
      res.status(201).send('User registered successfully');
    });
  });
});

// Login route (simplified)
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }

  const query = 'SELECT * FROM users WHERE username = ?';
  db.query(query, [username], (err, results) => {
    if (err) return res.status(500).send('Error querying the database');

    if (results.length === 0) return res.status(400).send('User not found');

    const user = results[0];

    bcrypt.compare(password, user.password, (err, match) => {
      if (err) return res.status(500).send('Error comparing passwords');
      if (!match) return res.status(400).send('Invalid password');

      res.status(200).send(`Welcome, ${user.username}!`);
    });
  });
});

// Server listener
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
