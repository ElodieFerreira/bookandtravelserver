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

module.exports = commentaireService;

