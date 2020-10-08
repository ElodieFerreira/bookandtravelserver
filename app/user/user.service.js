// importer la config de la bd
// exceuter les requetes
const pool = require("../helpers/helper_db");
const userService = {};

userService.findById = (userId, result) => {
    pool.query(`SELECT * FROM utilisateur WHERE ID = ${userId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};

userService.post = (nom, prenom, mail, telephone, result) => {
    pool.query(`INSERT INTO utilisateur(Nom, Prenom, Mail, Telephone) VALUES ('${nom}', '${prenom}', '${mail}', '${telephone}')`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};

userService.put = (id, nom, prenom, mail, telephone, result) => {
    pool.query(`UPDATE utilisateur SET Nom = '${nom}', Prenom = '${prenom}' , Mail= '${mail}', Telephone= '${telephone}' WHERE ID = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user ", res);
            result(null, res);
            return;
        }

        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};

userService.deleteUser = (id, result) => {
    pool.query(`DELETE FROM utilisateur WHERE ID = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found user ", res);
            result(null, res);
            return;
        }

        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};

module.exports = userService;