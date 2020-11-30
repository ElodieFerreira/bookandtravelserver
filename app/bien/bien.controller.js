//recupérer les données du body
// excéuter les fonctions nécessaires
// les retours
const express = require('express');
const router = express.Router();
const bienService = require('./bien.service');
const photoService = require('../photo/photo.service');
const optionsService = require('../bien_has_type/bien_has_type.service');
const jwt = require('../helpers/jwt');

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
    if(parseInt(req.params.id) == jwt.getUserId(req.headers.authorization)) {
        bienService.findAll(req.params.id,(err, data) => {
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
    } else {
        res.status(403).send({message: "vous ne pouvez pas recuperer ses données"});
    }

};

/* 
*
*INSRT INTO
*
*/
create = (req, res) => {
    if(jwt.getUserId(req.headers.authorization) != -1) {
        if(req.body.libelle && req.body.prix && req.body.adresse && req.body.cp && req.body.superficie && req.body.ville && req.body.categorie && req.body.utilisateur_id) {
            bienService.create(req.body.libelle, req.body.prix, req.body.adresse, req.body.cp, req.body.superficie, req.body.ville, req.body.categorie, req.body.utilisateur_id, (err, data) => {
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
                } else {
                    const id = data;
                    if (req.body.url) {
                        photoService.post(req.body.url, id, (err, data) => {
                        });
                    }
                    if (req.body.options) {
                        for (var option in req.body.options) {
                            optionsService.post(option, id, (err, data) => {
                            });
                        }
                    }
                    res.status(204).send();
                }
            });
        } else res.status(400).send({message: 'il manque des informations'});
    } else {
        res.status(403).send({message: "aucune autorisation pour créer un bien"});
    }
};
/* 
*
*UPDATE
*
*/
update = (req, res) => {
    if(parseInt(req.body.Utilisateur_ID) == jwt.getUserId(req.headers.authorization)) {
        bienService.update(req.params.bienId, req.body.Libelle, req.body.Prix, req.body.Adresse, req.body.CP, req.body.Superficie, req.body.Ville, req.body.Categorie, req.body.Utilisateur_ID , (err, data) => {
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
            } else res.status(204).send({message:'mise à jour'});
        });
    } else {
        res.status(403).send("Vous n'avez pas le droit de modifier ce bien");
    }

};
/* 
*
*DELETE
*
*/

deletebien = (req, res) => {
    if(jwt.getUserId(req.headers.authorization) != -1) {
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
    } else res.status(403).send({message: "Vous n'avez pas les droits"});
};
//
router.post('/research/',research);
router.get('/:id',findById);
router.get('/all/:id',findAll);
router.post('/',create);

router.put('/:bienId',update);

router.delete('/:bienId',deletebien);

//router.post('/update',update);

module.exports = router;
