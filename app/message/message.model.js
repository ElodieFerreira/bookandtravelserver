//recupérer les données du body
// excéuter les fonctions nécessaires
// les retours
const Message = function(message) {
    this.ID                     = message.id;
    this.Titre                  = message.Titre;
    this.Text                   = message.Text;
    this.User_send              = message.User_send;
    this.Reservation_ID         = message.Reservation_ID;
    this.User_receive           = message.User_receive;
};


module.exports = message;