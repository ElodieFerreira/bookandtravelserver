//recupérer les données du body
// excéuter les fonctions nécessaires
// les retours
const User = function(user) {
    this.ID         = user.id;
    this.Nom        = user.nom;
    this.Prenom     = user.prenom;
    this.Mail       = user.mail;
    this.Telephone  = user.telephone;
};



module.exports = user;