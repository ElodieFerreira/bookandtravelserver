//recupérer les données du body
// excéuter les fonctions nécessaires
// les retours
const Reservation = function(reservation) {
    this.ID                     = reservation.id;
    this.Date_Debut             = reservation.date_Debut;
    this.Date_fin               = reservation.date_fin;
    this.Etat_Reservation       = reservation.etat_Reservation;
    this.Bien_ID                = reservation.bien_ID;
    this.IDLoueur               = reservation.ID-Loueur;
    this.IDLocataire            = reservation.ID_locataire;
};


module.exports = reservation;