const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');

const connection = new pg.Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'admin',
  database: 'foodRecipePijar',
  port: 5432,
});

const app = express();

// Creating a GET route that returns data from the 'users' table.
app.get('/users', function (req, res) {
  // Connecting to the database.
  connection.connect(function (err, connection) {
    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM users', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results.rows);
    });
  });
});

// Starting our server.
app.listen(7000, () => {
  console.log('Go to http://localhost:7000/users so you can see the data.');
});
