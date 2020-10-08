//recupérer les données du body
// excéuter les fonctions nécessaires
// les retours
const express = require('express');
const router = express.Router();
const reservationService = require('./reservation.service');



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
    reservationService.findById(req.params.id, (err, data) => {
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

// location à partir de l'id du locataire
findByID_Locataire = (req, res) => {
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
};

// location à partir de l'id du loueur
findByID_Loueur = (req, res) => {
    reservationService.findByID_Loueur(req.params.id, (err, data) => {
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

/* 
*
*UPDATE
*
*/

// mise de jour de la réservation en état validé
updateByID_etat = (req, res) => {
    reservationService.updateByID_etat(req.params.id, (err, data) => {
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

/* 
*
*INSRT INTO
*
*/
//
 
insertReservation = (req, res) => {
    console.log(req.date_d);
    reservationService.insertReservation(req.body.date_d, req.body.date_f, req.body.etat, req.body.total, req.body.bien_id, req.body.loueur_id, req.body.locataire_id, (err, data) => {
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


/* 
*
*Routes
*
*/
router.get('/:id',findById);
router.get('/ID_Locataire/:id',findByID_Locataire);
router.get('/ID_Loueur/:id',findByID_Loueur);
router.get('/updateByID_etat/:id',updateByID_etat);
router.post('/insertReservation/',insertReservation);


router.get('/',test);

module.exports = router;
