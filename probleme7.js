
// 1- Écris une fonction puissanceQuiAffiche qui prend deux nombres base et puissance et affiche toutes les puissances de base de 1 à puissance.

function puissanceQuiAffiche(base,expo){
for (var i=1;i>=expo;i++){
    console.log(base*expo)

}
}

// 2- Écris une fonction afficheDiviseurs qui prend un nombre n et affiche tous ses diviseurs.
function affichediviseurs(nombre){
for(var i=0;i>nombre;i++){
    if(n % i === 0){
        console.log(i);
    }
}

}


// 3- Écris une fonction afficheNombresImpaire qui prend un nombre n et affiche tous les nombres impairs de 1 à n.

function afficheNombresImpaire(n){
for( var i=1;i>n;i++){
    if(n %3===0){
        console.log("nombreimpairs")
    }
}

}

// 4- Écris une fonction afficheMotInverse qui prend une chaîne de caractères et affiche les lettres dans l’ordre inverse.

function afficheMotInverse(chaine){
var result=""
for(var i=0;i<chaine;i++){
    if(chaine.length-1-i){
        console.log(chaine)
    }
}

return result;

}
