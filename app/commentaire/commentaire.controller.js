//recupérer les données du body
// excéuter les fonctions nécessaires
// les retours
const express = require('express');
const router = express.Router();
const commentaireService = require('./commentaire.service');

test = (req, res) =>{
    console.log("hello");
    res.send("coucou");
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
    commentaireService.deleteCommentaire(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found photo with id ${req.params.customerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving photo with id " + req.params.customerId
                });
            }
        } else res.send(data);
    });
};

post = (req, res) => {
    commentaireService.post(req.body.Etoiles, req.body.Commentaire, req.body.Reservation_ID, req.body.Bien_ID, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found photo with id ${req.params.customerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving photo with id " + req.params.customerId
                });
            }
        } else res.send(data);
    });
};

router.get('/:id',findById);
router.get('/',test);

router.post('/' , post);

router.delete('/:id' , deleteCommentaire);

module.exports = router;
