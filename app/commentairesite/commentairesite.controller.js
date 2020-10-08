//recupérer les données du body
// excéuter les fonctions nécessaires
// les retours
const express = require('express');
const router = express.Router();
const commentairesiteService = require('./commentairesite.service');

test = (req, res) =>{
    console.log("hello");
    res.send("coucou");
}
findById = (req, res) => {
    commentairesiteService.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found commentairesite with id ${req.params.customerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving commentairesite with id " + req.params.customerId
                });
            }
        } else res.send(data);
    });
};

getall = (req, res) => {
    commentairesiteService.getall((err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found commentairesite with id ${req.params.customerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving commentairesite with id " + req.params.customerId
                });
            }
        } else res.send(data);
    });
};

post = (req, res) => {
    commentairesiteService.post(req.body.Titre, req.body.Text, req.body.Utilisateur_ID, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found commentairesite with id ${req.params.customerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving commentairesite with id " + req.params.customerId
                });
            }
        } else res.send(data);
    });
};

deleteCommentaireSite = (req, res) => {
    commentairesiteService.deleteCommentaireSite(req.params.ID, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found commentairesite with id ${req.params.customerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving commentairesite with id " + req.params.customerId
                });
            }
        } else res.send(data);
    });
};

router.get('/:id',findById);
router.get('/', getall);

router.post('/', post);

router.delete('/:ID', deleteCommentaireSite);

module.exports = router;
