//recupérer les données du body
// excéuter les fonctions nécessaires
// les retours
const express = require('express');
const router = express.Router();
const bien_has_typeService = require('./bien_has_type.service');

test = (req, res) =>{
    console.log("hello");
    res.send("coucou");
}
findById = (req, res) => {
    bien_has_typeService.findById(req.params.bienid, req.params.optionid, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found bien_has_type with id ${req.params.customerId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving bien_has_type with id " + req.params.customerId
                });
            }
        } else res.send(data);
    });
};

router.get('/:bienid/:optionid/',findById);
router.get('/',test);

module.exports = router;
