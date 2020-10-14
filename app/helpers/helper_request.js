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
    // structure de la requete
    let retour = "Select b.* from bien b , bien_has_type bht where b.ID = bht.Bien_ID ";
    
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

    // options
     var option2 ="";
     if(Request.options.length != 0 ){
        option2 = " and options_ID in(";
        option2 += ""+Request.options[0]+"";
       
         for (var i = 1 ; i < Request.options.length ; i++ ){
            option2 = option2+","+Request.options[i]+"";
         }
         option2 = option2+")"; 
     }
    // minSurface
    var minSurface2 ="";
    if(Request.minSurface.length != 0 ){
        minSurface2 = " and Superficie >= "+Request.minSurface[0]+" ";
    }

    // maxSurface
    var maxSurface2 ="";
    if(Request.maxSurface.length != 0 ){
        maxSurface2 = " and Superficie <= "+Request.maxSurface[0]+" ";
    }

    // minPrice
    var minPrice2 ="";
    if(Request.minPrice.length != 0 ){
        minPrice2 = " and Prix >= "+Request.minPrice[0]+" ";
    }

    // maxPrice
    var maxPrice2 ="";
    if(Request.maxPrice.length != 0 ){
        maxPrice2 = " and Prix <= "+Request.maxPrice[0]+" ";
    }

    // categorie
    var categorie2 = "";
    if(Request.categorie.length != 0 ){
        categorie2 = " and Categorie in(";
        categorie2 += "'"+Request.categorie[0]+"'";
       
         for (var i = 1 ; i < Request.categorie.length ; i++ ){
            categorie2 = categorie2+",'"+Request.categorie[i]+"'";
         }
         categorie2 = categorie2+")"; 
     }

    //fin
    retour += city+option2+minSurface2+maxSurface2+minPrice2+maxPrice2+categorie2;
    console.log(retour);
    return(retour);
}
 
module.exports = service;

/////////// CODE POUR TESTER /////////////////
/*
{
    "cities" : [
            "aubagne",
            "Paris",
            "Evry"
    ],
    "options" : [
            "1",
            "2",
            "3"],
    "minSurface" : [
           "100" ],
    "maxSurface" : [
           "200" ], 
    "minPrice" : [
           "15" ],
    "maxPrice" : [
           "200" ],  
    "categorie" : [
           "Maison",
           "Appartement"
            ]   
}
*/