const express = require('express');
const app = express();
app.get('/', (req, res) => {
  try {
    const data = getSomethingFromDatabase();
    res.send(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

function getSomethingFromDatabase() {
  // Simulate a database connection error.
  if (Math.random() < 0.5) {
    throw new Error('Database connection failed');
  }
  return 'Something from the database';
}