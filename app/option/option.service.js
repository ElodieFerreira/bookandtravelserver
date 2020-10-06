// importer la config de la bd
// exceuter les requetes
const pool = require("../helpers/helper_db");
const optionService = {};

optionService.findById = (optionId, result) => {
    pool.query(`SELECT * FROM options WHERE ID = ${optionId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found option ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};

module.exports = optionService;

