const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors")
const swaggerUi = require('swagger-ui-express');
// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: ""
// });
// api routes

swaggerDocument = require("./swagger.json");
const app = express();
// Allow cross plateform request
app.use(cors())
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/option', require('./app/option/option.controller'));
app.use('/user', require('./app/user/user.controller'));
app.use('/bien', require('./app/bien/bien.controller'));
app.use('/reservation', require('./app/reservation/reservation.controller'));
app.use('/bien_has_type', require('./app/bien_has_type/bien_has_type.controller'));
app.use('/commentaire', require('./app/commentaire/commentaire.controller'));
app.use('/message', require('./app/message/message.controller'));
app.use('/commentairesite', require('./app/commentairesite/commentairesite.controller'));
app.use('/photo', require('./app/photo/photo.controller'));



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
