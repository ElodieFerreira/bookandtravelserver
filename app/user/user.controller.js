//recupérer les données du body
// excéuter les fonctions nécessaires
// les retours
const express = require('express');
const router = express.Router();
const userService = require('./user.service');

test = (req, res) =>{
    console.log("hello");
    res.send("coucou");
}
findById = (req, res) => {
    userService.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found user with id ${req.params.customerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving user with id " + req.params.customerId
                });
            }
        } else res.send(data);
    });
};

router.get('/:id',findById);
router.get('/',test);

module.exports = router;