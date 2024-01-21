const express = require('express');
const cors = require('cors');
const sql = require('mysql');

const app = express();
app.use(cors);
app.use(express.json());

PORT = 3001;

const db = sql.createConnection({
    host: "localhost",
    user:"root",
    database: "test",
    password: "",
    port: 3306
})

db.connect((error) => {
    if (error)console.log("Cannot connect to database");
    else {console.log("Succesfully connected to db")}
})

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})