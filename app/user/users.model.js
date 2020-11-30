//recupérer les données du body
// excéuter les fonctions nécessaires
// les retours
const User = function(user) {
    this.ID         = user.id;
    this.Nom        = user.Nom;
    this.Prenom     = user.Prenom;
    this.Mail       = user.Mail;
    this.Telephone  = user.Telephone;
    this.MDP = user.MDP;
};

module.exports = User;
