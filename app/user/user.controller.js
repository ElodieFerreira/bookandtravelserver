//recupérer les données du body
// excéuter les fonctions nécessaires
// les retours
const bcrypt = require("bcrypt");
const express = require('express');
const router = express.Router();
const userService = require('./user.service');
const User = require('./users.model');
const jwt = require('../helpers/jwt');


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
    var user = new User(req.body);
    console.log(user);
    bcrypt.hash(user.Password, 5).then(function (hash) {
        user.Password = hash;
        userService.signup(user, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(200).send({
                        message: `Not found user with id ${req.params.customerId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error retrieving user with id " + req.params.customerId
                    });
                }
            } else res.send(data);
        });

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

login = (req, res) => {
    var mail = req.body.mail;
    var password = req.body.password;
    // check if userfound
    userService.findByEmail(mail, (err, userFound) => {
        if (userFound) {
            bcrypt.compare(password, userFound.MDP, function (errBycript, resBycript) {
                if (resBycript) {
                    return res.status(200).json({
                        'userId': userFound.ID,
                        'token': jwt.generateTokenForUser(userFound),
                    })
                } else {
                    return res.status(403).json({'error': 'invalid password'});
                }
            })
        } else {
            return res.status(403).json({'error': 'user not found'});
        }
    })
}

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


router.get('/:id', findById);
router.post('/login/', login);

router.post('/', post);

router.put('/:id', put);

router.delete('/:id', deleteUser);

module.exports = router;
