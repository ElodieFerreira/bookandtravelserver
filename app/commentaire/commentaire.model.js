//recupérer les données du body
// excéuter les fonctions nécessaires
// les retours
const Commentaire = function(commentaire) {
    this.ID                     = commentaire.id;
    this.Etoiles                = commentaire.Etoiles;
    this.Commentaire            = commentaire.Commentaire;
    this.Etat_Reservation       = commentaire.etat_Reservation;
    this.Reservation_ID         = commentaire.Reservation_ID;
    this.Bien_ID                = commentaire.Bien_ID;
};


module.exports = commentaire;