// importer la config de la bd
// exceuter les requetes
const pool = require("../helpers/helper_db");
const reservationService = {};


/* 
*
*GET
*
*/
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
//commentaires liées a un bien 
reservationService.getcomments = (id, result) => {
    pool.query(`SELECT c.*
    FROM reservation r, commentaire c
    WHERE c.Reservation_ID = r.ID
    AND c.Bien_id = ${id}`, (err, res) => {
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
//les photos d'un bien 
reservationService.getphotos = (id, result) => {
    pool.query(`SELECT * FROM photo WHERE Bien_id = ${id}`, (err, res) => {
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
// les réservations d'un bien 
reservationService.getreservation  = (id, result) => {
    pool.query(`SELECT * FROM reservation WHERE Bien_id = ${id}`, (err, res) => {
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

/* 
*
*UPDATE
*
*/

// mise de jour de la réservation en état validé
reservationService.updateByID_etat = (ID, etat, result) => {
    //console.log(pool.query(`UPDATE reservation set Etat_Reservation = '${etat}' WHERE ID = ${ID}`));

    pool.query(`UPDATE reservation set Etat_Reservation = '${etat}' WHERE ID = ${ID}`, (err, res) => {
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


/* 
*
*INSRT INTO
*
*/
reservationService.insertReservation = (date_d, date_f, etat, total, bien_id, loueur_id, locataire_id, result) => {
    //console.log(pool.query(`INSERT INTO reservation (Date_Debut, Date_fin, Etat_Reservation, Total, Bien_ID, ID_Loueur, ID_Locataire) VALUES ('${date_d}', '${date_f}', '${etat}', '${total}', ${bien_id}, ${loueur_id}, ${locataire_id})`));

    pool.query(`INSERT INTO reservation (Date_Debut, Date_fin, Etat_Reservation, Total, Bien_ID, ID_Loueur, ID_Locataire) VALUES ('${date_d}', '${date_f}', '${etat}', '${total}', ${bien_id}, ${loueur_id}, ${locataire_id})`, (err, res) => {
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

