// importer la config de la bd
// exceuter les requetes
const pool = require("../helpers/helper_db");
const reservationService = {};

reservationService.findById = (reservationId, result) => {
    pool.query(`SELECT * FROM reservation WHERE ID = ${reservationId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found reservation ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found reservation with the id
        result({ kind: "not_found" }, null);
    });
};

module.exports = reservationService;

