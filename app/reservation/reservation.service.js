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

reservationService.findByID_Locataire = (ID_Locataire, result) => {
    pool.query(`SELECT * FROM reservation WHERE ID_Locataire = ${ID_Locataire}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found reservation ", res);
            result(null, res);
            return;
        }

        // not found reservation with the id
        result({ kind: "not_found" }, null);
    });
};

reservationService.findByID_Loueur = (ID_Loueur, result) => {
    pool.query(`SELECT * FROM reservation WHERE ID_Loueur = ${ID_Loueur}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found reservation ", res);
            result(null, res);
            return;
        }

        // not found reservation with the id
        result({ kind: "not_found" }, null);
    });
};

// mise de jour de la réservation en état validé
reservationService.updateByID_etat = (ID, result) => {
    pool.query(`UPDATE reservation set Etat_Reservation = 'VALIDATE' WHERE ID = ${ID}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found reservation ", res);
            result(null, res);
            return;
        }

        // not found reservation with the id
        result({ kind: "not_found" }, null);
    });
};

module.exports = reservationService;

