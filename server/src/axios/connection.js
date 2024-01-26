const sql = require('mysql');

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