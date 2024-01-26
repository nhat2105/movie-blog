const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/index.js')


const app = express();
app.use(cors);
app.use(express.json());

app.use("/api", routes);

PORT = 3001;

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})