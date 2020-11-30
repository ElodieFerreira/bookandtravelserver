//recupérer les données du body
// excéuter les fonctions nécessaires
// les retours
const express = require('express');
const router = express.Router();
const reservationService = require('./reservation.service');
const jwt = require('../helpers/jwt');


test = (req, res) =>{
    console.log("hello");
    res.send("coucou");
}

/* 
*
*GET
*
*/
findById = (req, res) => {
    if(-1 !== jwt.getUserId(req.headers.authorization)) {
        reservationService.findById(req.params.id, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found reservation with id ${req.params.id}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error retrieving reservation with id " + req.params.id
                    });
                }
            } else res.send(data);
        });
    } else res.status(403).send({message: 'Non autorisé'})
};

// location à partir de l'id du locataire
findByID_Locataire = (req, res) => {
    if(parseInt(req.params.id) == jwt.getUserId(req.headers.authorization)) {
        reservationService.findByID_Locataire(req.params.id, (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found reservation with id ${req.params.customerId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error retrieving reservation with id " + req.params.customerId
                    });
                }
            } else res.send(data);
        });
    } else res.status(403).send({message: 'Non autorisé'})
};

// location à partir de l'id du loueur
findByID_Loueur = (req, res) => {
    reservationService.findByID_Loueur(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found reservation with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving reservation with id " + req.params.id
                });
            }
        } else res.send(data);
    });
};
// commentaires d'un bien 
getcomments = (req, res) => {
    reservationService.getcomments(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found commentaire pour la resevation id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving reservation with id " + req.params.id
                });
            }
        } else res.send(data);
    });
};

//photos d'un bien 
getphotos = (req, res) => {
    reservationService.getphotos(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found reservation with id ${req.params.customerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving reservation with id " + req.params.customerId
                });
            }
        } else res.send(data);
    });
};
// les reservations d'un bien 
getreservation  = (req, res) => {
    reservationService.getreservation (req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found reservation with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving reservation with id " + req.params.id
                });
            }
        } else res.send(data);
    });
};

/* 
*
*UPDATE
*
*/

// mise de jour de l etat de la réservation

updateByID_etat = (req, res) => {
    if(-1 !== jwt.getUserId(req.headers.authorization)) {
        console.log(req.body.etatR);
        if(req.params.id && req.body.etat) {
            reservationService.updateByID_etat(req.params.id, req.body.etat, (err, data) => {
                if (err) {
                    if (err.kind === "not_found") {
                        res.status(404).send({
                            message: `Not found reservation with id ${req.params.id}.`
                        });
                    } else {
                        res.status(500).send({
                            message: "Error retrieving reservation with id " + req.params.id
                        });
                    }
                } else res.status(204).send('ok');
            });
        } else res.status(404).send({message: 'informations manquantes'})
    } else res.status(403).send({message: 'non autorisé'});
};

/* 
*
*INSRT INTO
*
*/
//

//
insertReservation = (req, res) => {
    etat = 'en attente';
    if(parseInt(req.body.locataire_id) == jwt.getUserId(req.headers.authorization)) {
        if(req.body.date_d && req.body.date_f && req.body.total && req.body.bien_id && req.body.loueur_id && req.body.locataire_id) {
            reservationService.insertReservation(req.body.date_d, req.body.date_f, etat, req.body.total, req.body.bien_id, req.body.loueur_id, req.body.locataire_id, (err, data) => {
                if (err) {
                    if (err.kind === "not_found") {
                        res.status(404).send({
                            message: `Not found.`
                        });
                    } else {
                        res.status(500).send({
                            message: "Error retrieving reservation with id " + req.params.customerId
                        });
                    }
                } else res.status(204).send();
            });
        } else {
            res.status(404).send({message: 'il manque des informations'});
        }
    } else {
        res.status(403).send({message: 'Non autorisé'})
    }
}; 


/* 
*
*Routes
*
*/

//get
router.get('/:id',findById);
router.get('/ID_Locataire/:id',findByID_Locataire);
router.get('/ID_Loueur/:id',findByID_Loueur);
router.get('/comments/:id',getcomments);
router.get('/photos/:id',getphotos);
router.get('/reservations/:id',getreservation);
 
//post
router.post('/',insertReservation);
router.put('/etat/:id',updateByID_etat);

router.get('/',test);

module.exports = router;
