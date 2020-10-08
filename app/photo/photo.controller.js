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


router.get('/:id',findById);
router.get('/',test);

module.exports = router;
