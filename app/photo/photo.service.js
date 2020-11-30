// importer la config de la bd
// exceuter les requetes
const pool = require("../helpers/helper_db");
const photoService = {};

//recherche les photos du bien n°  ..
photoService.findById = (bien_Id, result) => {
    pool.query(`SELECT * FROM photo WHERE Bien_ID = ${bien_Id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found photo ", res);
            result(null, res);
            return;
        }

        // not found photo with the id
        result({ kind: "not_found" }, null);
    });
};

photoService.post = (Lien, Bien_ID, result) => {
    pool.query(`INSERT INTO photo(Lien, Bien_ID) VALUES ('${Lien}', ${Bien_ID})`, (err, res) => {
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

photoService.deletePhoto = (photoId, result) => {
    pool.query(`DELETE FROM photo WHERE ID = ${photoId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        } else {
            console.log("found photo ", res[0]);
            result(null, true);
            return;
        }

        // not found photo with the id
        result({ kind: "not_found" }, null);
    });
};

module.exports = photoService;

