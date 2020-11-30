//recupérer les données du body
// excéuter les fonctions nécessaires
// les retours
const express = require('express');
const router = express.Router();
const commentaireService = require('./commentaire.service');
const jwt = require('../helpers/jwt');

test = (req, res) =>{
    console.log(req);
    console.log(req.query.name);
    res.send(req.params.name);
}
findById = (req, res) => {
    commentaireService.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found commentaire with id ${req.params.customerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving commentaire with id " + req.params.customerId
                });
            }
        } else res.send(data);
    });
};

deleteCommentaire = (req, res) => {
    if(jwt.getUserId(req.headers.authorization) != -1) {
        commentaireService.deleteCommentaire(req.params.id, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found jhjhjh photo with id ${req.params.customerId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error retrieving photo with id " + req.params.customerId
                    });
                }
            } else res.status(204).send({message:'commentaireSupprimer'});
        });
    } else res.status(403).send({message:'Non autorisé'});
};

post = (req, res) => {
    if(jwt.getUserId(req.headers.authorization) != -1) {
        if(req.body.Etoiles && req.body.Commentaire && req.body.Reservation_ID && req.body.Bien_ID) {
            commentaireService.post(req.body.Etoiles, req.body.Commentaire, req.body.Reservation_ID, req.body.Bien_ID, (err, data) => {
                if (err) {
                    if (err.kind === "not_found") {
                        res.status(404).send({
                            message: `njjhjhjhNot found photo with id ${req.params.customerId}.`
                        });
                    } else {
                        res.status(500).send({
                            message: "Error retrieving photo with id " + req.params.customerId
                        });
                    }
                } else res.status(204).send({message:'commentaire enregristré'});
            });
        } else res.status(404).send({message: 'informations manquantes'});
    } else res.status(403).send({message:'Non autorisé'});
};

router.get('/',test);
router.get('/:id',findById);

router.post('/' , post);

router.delete('/:id' , deleteCommentaire);

module.exports = router;
