// importer la config de la bd
// exceuter les requetes
const pool = require("../helpers/helper_db");
const bienService = {};
const helpers =  require("../helpers/helper_request");

//select 
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

//
bienService.findAll = (result) => {
    pool.query(`SELECT * FROM bien`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found bien ", res);
            result(null, res);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};

bienService.research = (body, result) => {
    console.log("debut");
    let request = helpers.createSearchRequest(body);
    console.log(request);
    pool.query(request, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found bien ", res);
            result(null, res);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};

/* 
*
*INSRT INTO
*
*/
bienService.create = (libelle, prix, adresse, cp, superficie, ville, categorie, utilisateur_id, result) => {

    //console.log(pool.query(`INSERT INTO bien(Libelle, Prix, Adresse, CP, Utilisateur_ID) VALUES ('${libelle}', '${prix}', '${adresse}', '${cp}', ${utilisateur_id})`));

    pool.query(`INSERT INTO bien(Libelle, Prix, Adresse, CP, Superficie, Ville, Categorie, Utilisateur_ID) VALUES ('${libelle}', '${prix}', '${adresse}', '${cp}', '${superficie}', '${ville}', '${categorie}', ${utilisateur_id})`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found bien ", res);
            result(null, res);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};
/* 
*
*UPDATE 
*
*/
bienService.update = (bienId ,libelle, prix, adresse, cp, superficie, ville, categorie, utilisateur_id, result) => {
    //console.log(pool.query(`UPDATE bien SET Libelle = '${libelle}' , Prix = '${prix}' , Adresse = '${adresse}', CP = '${cp}'  WHERE ID = ${bienId}`));
    
    pool.query(`UPDATE bien SET Libelle = '${libelle}' , Prix = '${prix}' , Adresse = '${adresse}', CP = '${cp}', Superficie = '${superficie}', ville = '${ville}', categorie = '${categorie}' WHERE ID = ${bienId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found bien ", res);
            result(null, res);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};
/* 
*
*DELETE 
*
*/
bienService.deletebien = (bienId , result) => {

    pool.query(`DELETE FROM bien WHERE ID = ${bienId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found bien ", res);
            result(null, res);
            return;
        }
        result({ kind: "not_found" }, null);
    });
};


module.exports = bienService;

