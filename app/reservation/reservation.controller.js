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
// commentaires d'un bien 
getcomments = (req, res) => {
    reservationService.getcomments(req.params.id, (err, data) => {
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

// mise de jour de l etat de la réservation

updateByID_etat = (req, res) => {
    reservationService.updateByID_etat(req.body.id, req.body.etat, (err, data) => {
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

//
insertReservation = (req, res) => {
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

//get
router.get('/:id',findById);
router.get('/ID_Locataire/:id',findByID_Locataire);
router.get('/ID_Loueur/:id',findByID_Loueur);
router.get('/comments/:id',getcomments);
router.get('/photos/:id',getphotos);
router.get('/reservations/:id',getreservation);
 
//post
router.post('/insertReservation/',insertReservation);
router.post('/updateByID_etat/',updateByID_etat);

router.get('/',test);

module.exports = router;
