/*
 en utilisant les closures, créez une fonction appelée creerCafe qui possède les propriétés et méthodes suivantes :
 cafe : une propriété représentant le nombre de cafés que votre café peut servir.
 petitGateau : une propriété représentant le nombre de petits gâteaux que votre café peut servir.

 Créez une fonction interne servirClient qui sert du café et des petits gâteaux au nombre de clients passé en paramètre.
*/function creercafe(nombreclient){
var starBucks=nombreclient
}
function servirclient(nombrecafe,nombregateau){
    if(nombrecafe>=0){
        return nombreclient-nombrecafe
    }else{
        if(nombregateau>=0){
            return nombreclient-nombregateau
        }
    }if(nombrecafe!==0){
        return cafeinsuffisant
    }if(nombregateau!==0){
        return gateauinsuffisant
    }
    
}

// Exemple :
// var starBucks = creerCafe(20,15);
// starBucks(5)  => "Nous avons servi 5 clients et il reste 15 cafés et 10 petits gâteaux"
// starBucks(10) => "Nous avons servi 10 clients et il reste 5 cafés et 0 petits gâteaux"
// starBucks(3)  => "Nous n'avons plus de petits gâteaux"
