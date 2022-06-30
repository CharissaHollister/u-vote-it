const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username,
    user: "root",
    // Your MySQL password
    password: "root",
    database: "election",
  },
  console.log("Connected to the election database.")
);

// //get route testing if server can send to client
// app.get("/", (req, res) => {
//   res.json({
//     message: "Hello World",
//   });
// });

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});



// Default response for any other request (Not Found) needs to be the last route
app.use((req, res) => {
  res.status(404).end();
});

//start the Express.js server on port 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
