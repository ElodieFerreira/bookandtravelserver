// importer la config de la bd
// exceuter les requetes
const pool = require("../helpers/helper_db");
const messageService = {};

messageService.findById = (messageId, result) => {
    pool.query(`SELECT * FROM message WHERE ID = ${messageId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found message ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found message with the id
        result({ kind: "not_found" }, null);
    });
};

messageService.post = (titre, text, user_send, user_receive, result) => {
    pool.query(`INSERT INTO message(Titre, Text, User_send, User_receive) VALUES ('${titre}','${text}',${user_send},${user_receive})`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found message ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found message with the id
        result({ kind: "not_found" }, null);
    });
};

messageService.deleteMessage = (Id, result) => {
    pool.query(`DELETE FROM message WHERE ID = ${Id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found message ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found message with the id
        result({ kind: "not_found" }, null);
    });
};

module.exports = messageService;

