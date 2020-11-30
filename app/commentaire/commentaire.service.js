// importer la config de la bd
// exceuter les requetes
const pool = require("../helpers/helper_db");
const commentaireService = {};


commentaireService.findById = (commentaireId, result) => {
    pool.query(`SELECT * FROM commentaire WHERE ID = ${commentaireId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found commentaire ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found commentaire with the id
        result({ kind: "not_found" }, null);
    });
};


commentaireService.deleteCommentaire = (id, result) => {
    pool.query(`DELETE FROM commentaire WHERE ID = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.affectedRows) {
            console.log("found commentaire ", true);
            result(null, res[0]);
            return;
        }

        // not found commentaire with the id
        result({ kind: "not_found" }, null);
    });
};

commentaireService.post = (etoiles, commentaire, reservation_ID, bien_ID, result) => {
    pool.query(`INSERT INTO commentaire (Etoiles, Commentaire, Reservation_ID, Bien_ID) VALUES ('${etoiles}' ,'${commentaire}' ,${reservation_ID} ,${bien_ID})`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.affectedRows) {
            console.log("found commentaire ", res[0]);
            result(null, true);
            return;
        }

        // not found commentaire with the id
        result({ kind: "not_found" }, null);
    });
};

module.exports = commentaireService;

