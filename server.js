const express = require("express");
const bodyParser = require("body-parser");
var mysql = require('mysql2');
const swaggerUi = require('swagger-ui-express');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

swaggerDocument = require("./swagger.json");

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

const app = express();


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api-docs",swaggerUi.serve,
    swaggerUi.setup(swaggerDocument));


// test route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to book and travel servers" });
});

// require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
