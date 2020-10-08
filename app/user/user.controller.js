//recupérer les données du body
// excéuter les fonctions nécessaires
// les retours
const express = require('express');
const router = express.Router();
const userService = require('./user.service');


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

post = (req, res) => {
    userService.post(req.body.Nom, req.body.Prenom, req.body.Mail, req.body.Telephone, (err, data) => {
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

put = (req, res) => {
    userService.put(req.params.id, req.body.Nom, req.body.Prenom, req.body.Mail, req.body.Telephone, (err, data) => {
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

deleteUser = (req, res) => {
    userService.deleteUser(req.params.id, (err, data) => {
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

router.post('/', post); 

router.put('/:id',put);

router.delete('/:id',deleteUser);

module.exports = router;