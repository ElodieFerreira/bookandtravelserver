// importer la config de la bd
// exceuter les requetes
const pool = require("../helpers/helper_db");
const bien_has_typeService = {};

bien_has_typeService.findById = (bienId, optionId, result) => {
    pool.query(`SELECT * FROM bien_has_type WHERE Bien_ID = ${bienId} AND options_ID = ${optionId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found bien_has_type ", res);
            result(null, res);
            return;
        }

        // not found bien_has_type with the id
        result({ kind: "not_found" }, null);
    });
};

bien_has_typeService.findAll = ( result) => {
    pool.query(`SELECT * FROM bien_has_type`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found bien_has_type ", res);
            result(null, res);
            return;
        }

        // not found bien_has_type with the id
        result({ kind: "not_found" }, null);
    });
};

bien_has_typeService.findByIdBien = (bienId, result) => {
    pool.query(`SELECT * FROM bien_has_type WHERE Bien_ID = ${bienId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found bien_has_type ", res);
            result(null, res);
            return;
        }

        // not found bien_has_type with the id
        result({ kind: "not_found" }, null);
    });
};

bien_has_typeService.post = (option, Bien_ID, result) => {
    pool.query(`INSERT INTO bien_has_type(Bien_ID, options_ID) VALUES ('${Bien_ID}', ${option})`, (err, res) => {
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

module.exports = bien_has_typeService;
