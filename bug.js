const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // This line will cause an error if the database connection fails.
  res.send(getSomethingFromDatabase());
});

function getSomethingFromDatabase() {
  // Simulate a database connection error.
  if (Math.random() < 0.5) {
    throw new Error('Database connection failed');
  }
  return 'Something from the database';
}