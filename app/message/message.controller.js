//recupérer les données du body
// excéuter les fonctions nécessaires
// les retours
const express = require('express');
const router = express.Router();
const messageService = require('./message.service');

test = (req, res) =>{
    console.log("hello");
    res.send("coucou");
}
findById = (req, res) => {
    messageService.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found message with id ${req.params.customerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving message with id " + req.params.customerId
                });
            }
        } else res.send(data);
    });
};

post = (req, res) => {
    messageService.post(req.body.Titre, req.body.Text, req.body.User_send, req.body.User_receive, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found message with id ${req.params.customerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving message with id " + req.params.customerId
                });
            }
        } else res.send(data);
    });
};

deleteMessage = (req, res) => {
    messageService.deleteMessage(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found message with id ${req.params.customerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving message with id " + req.params.customerId
                });
            }
        } else res.send(data);
    });
};

router.get('/:id',findById);
router.get('/',test);

router.post('/', post);

router.delete('/:id', deleteMessage)
module.exports = router;
