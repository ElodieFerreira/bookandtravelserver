//recupérer les données du body
// excéuter les fonctions nécessaires
// les retours
const express = require('express');
const router = express.Router();
const bienService = require('./bien.service');

test = (req, res) =>{
    console.log("hello");
    res.send("coucou");
}

// select 
findById = (req, res) => {
    bienService.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found bien with id ${req.params.customerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving bien with id " + req.params.customerId
                });
            }
        } else res.send(data);
    });
};

research = (req, res) => {
    bienService.research(req.body, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found bien with id ${req.params.customerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving bien with id " + req.params.customerId
                });
            }
        } else res.send(data);
    });
};

// select tout les biens 
findAll= (req, res) => {
    bienService.findAll((err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found bien with id ${req.params.customerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving bien with id " + req.params.customerId
                });
            }
        } else res.send(data);
    });
};

/* 
*
*INSRT INTO
*
*/
create = (req, res) => {
    bienService.create(req.body.libelle, req.body.prix, req.body.adresse, req.body.cp, req.body.superficie, req.body.ville, req.body.categorie, req.body.utilisateur_id , (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found bien with id ${req.params.customerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving bien with id " + req.params.customerId
                });
            }
        } else res.send(data);
    });
};
/* 
*
*UPDATE
*
*/
update = (req, res) => {
    bienService.update(req.params.bienId, req.body.libelle, req.body.prix, req.body.adresse, req.body.cp, req.body.superficie, req.body.ville, req.body.categorie, req.body.utilisateur_id , (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found bien with id ${req.params.customerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving bien with id " + req.params.customerId
                });
            }
        } else res.send(data);
    });
};
/* 
*
*DELETE
*
*/

deletebien = (req, res) => {
    bienService.deletebien(req.params.bienId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found bien with id ${req.params.customerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving bien with id " + req.params.customerId
                });
            }
        } else res.send(data);
    });
};
//
router.get('/research/',research);
router.get('/:id',findById);
router.get('/',findAll);


router.post('/',create);

router.put('/:bienId',update);

router.delete('/:bienId',deletebien);

//router.post('/update',update);

module.exports = router;
