var service = {} ;

const Request = function(request) {
    this.cities = request.cities;
    this.options = request.options;
    this.minSurface = request.minSurface;
    this.maxSurface = request.maxSurface;
    this.minPrice = request.minPrice;
    this.maxPrice = request.maxPrice;
    this.categorie = request.categorie;
}

service.createSearchRequest = function(Request) {
    //structure de la requete
    let retour = "Select * from bien b , bien_has_type bht where b.ID = bht.Bien_ID ";
    
    // Villes
    var city = "";
    if(Request.cities.length != 0 ){
        city = " and Ville in(";
        city += "'"+Request.cities[0]+"'";
       
         for (var i = 1 ; i < Request.cities.length ; i++ ){
             city = city+",'"+Request.cities[i]+"'";
         }
         city = city+")"; 
     }

     //options
     var option2 ="";
     if(Request.options.length != 0 ){
        option2 = " and options_ID in(";
        option2 += ""+Request.options[0]+"";
       
         for (var i = 1 ; i < Request.options.length ; i++ ){
            option2 = option2+","+Request.options[i]+"";
         }
         option2 = option2+")"; 
     }

    retour += city+option2;
    console.log(retour);
    return(retour);
}
 
module.exports = service;