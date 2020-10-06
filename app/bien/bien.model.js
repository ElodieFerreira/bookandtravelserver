//recupérer les données du body
// excéuter les fonctions nécessaires
// les retours
const Bien = function(bien) {
    this.ID                 = bien.id;
    this.Libelle            = bien.libelle;
    this.Prix               = bien.prix;
    this.Adresse            = bien.adresse;
    this.CP                 = bien.cp;
    this.Utilisateur_ID     = bien.utilisateur_ID;
};



module.exports = bien;
