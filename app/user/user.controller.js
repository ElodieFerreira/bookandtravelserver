//recupérer les données du body
// excéuter les fonctions nécessaires
// les retours
const bcrypt = require("bcrypt");
const express = require('express');
const router = express.Router();
const userService = require('./user.service');
const User = require('./users.model');
const jwt = require('../helpers/jwt');


userFindById = (req, res) => {
    userService.findById(req.params.id, (err, data) => {
        console.log(req.params.id);
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
    console.log('jeminscrit');
    var user = new User(req.body);
    console.log(user);
    bcrypt.hash(user.MDP, 5).then(function (hash) {
        user.MDP = hash;
        userService.signup(user, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(204).send({
                        message: `utilisateur créée.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error retrieving user creation"
                    });
                }
            } else res.send(data);
        });
    });
};

put = (req, res) => {
    if(parseInt(req.params.id) == jwt.getUserId(req.headers.authorization)) {
        console.log("je rentre");
        userService.put(req.params.id, req.body.Nom, req.body.Prenom, req.body.Mail, req.body.Telephone, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found user with id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error retrieving user with id " + req.params.id
                    });
                }
            } else {
                return userFindById(req,res);
            }
        });
    } else {
        return res.status(403).send({
            message: `Vous ne pouvez pas modifier l'utilisateur`
        });
    }
};

login = (req, res) => {
    var mail = req.body.Mail;
    var password = req.body.MDP;
    userService.findByEmail(mail, (err, userFound) => {
        if (userFound) {
            bcrypt.compare(password, userFound.MDP, function (errBycript, resBycript) {
                if (resBycript) {
                    return res.status(200).json({
                        'userId': userFound.ID,
                        'token': jwt.generateTokenForUser(userFound),
                    })
                } else {
                    return res.status(403).json({message: 'Information de connexion incorrectes'});
                }
            })
        } else {
            return res.status(403).json({message: "Information de connexion incorrectes"});
        }
    })
}

deleteUser = (req, res) => {
    if(parseInt(req.params.id) == jwt.getUserId(req.headers.authorization)) {
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
    } else {
        return res.status(403).send({
            message: `Vous ne pouvez pas supprimer l'utilisateur`
        });
    }
};


router.get('/:id', userFindById);
router.post('/login/', login);

router.post('/', post);

router.put('/:id', put);

router.delete('/:id', deleteUser);

module.exports = router;
