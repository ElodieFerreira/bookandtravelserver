// importer la config de la bd
// exceuter les requetes
const pool = require("../helpers/helper_db");
const photoService = {};

photoService.findById = (photoId, result) => {
    pool.query(`SELECT * FROM photo WHERE ID = ${photoId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found photo ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found photo with the id
        result({ kind: "not_found" }, null);
    });
};

module.exports = photoService;

