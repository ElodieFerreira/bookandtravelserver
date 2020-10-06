// importer la config de la bd
// exceuter les requetes
const pool = require("../helpers/helper_db");
const bienService = {};

bienService.findById = (bienId, result) => {
    pool.query(`SELECT * FROM bien WHERE ID = ${bienId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found bien ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found bien with the id
        result({ kind: "not_found" }, null);
    });
};

module.exports = bienService;

