//recupérer les données du body
// excéuter les fonctions nécessaires
// les retours
const express = require('express');
const router = express.Router();
const photoService = require('./photo.service');

test = (req, res) =>{
    console.log("hello");
    res.send("coucou");
}

//recupere les photos d'un bien 
findById = (req, res) => {
    photoService.findById(req.params.id, (err, data) => {
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

postPicture = (req, res) => {
    photoService.post(req.body.Lien, req.body.Bien_ID, (err, data) => {
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

deletePhoto = (req, res) => {
    photoService.deletePhoto(req.params.id, (err, data) => {
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

router.post('/', postPicture);

router.delete('/:id', deletePhoto);

module.exports = router;
