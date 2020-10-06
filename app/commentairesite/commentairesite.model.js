//recupérer les données du body
// excéuter les fonctions nécessaires
// les retours
const Commentairesite = function(commentairesite) {
    this.ID                     = commentairesite.id;
    this.Titre                  = commentairesite.Titre;
    this.Text                   = commentairesite.Text;
    this.Utilisateur_ID         = commentairesite.Utilisateur_ID;
};


module.exports = commentairesite;