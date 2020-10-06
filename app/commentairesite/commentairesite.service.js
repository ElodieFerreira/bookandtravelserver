// importer la config de la bd
// exceuter les requetes
const pool = require("../helpers/helper_db");
const commentairesiteService = {};

commentairesiteService.findById = (commentairesiteId, result) => {
    pool.query(`SELECT * FROM commentairesite WHERE ID = ${commentairesiteId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found commentairesite ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found commentairesite with the id
        result({ kind: "not_found" }, null);
    });
};

module.exports = commentairesiteService;

