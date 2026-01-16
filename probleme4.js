// 1- Crée une fonction qui prend deux nombres et retourne :
// "égaux" s’ils sont identiques
// "différents" sinon
function addition(num1,num2){
if(num1===num2){
    return "egaux"
}else{
return "differents"
}
}





// 2- Crée une fonction qui prend une chaîne et retourne true
// si elle est vide, sinon false
function estvide(chaine){
   if(chaine===""){
return "true"

}else{

  return  false
}

}



// 3- Crée une fonction qui prend une vitesse et retourne :
// "lent" si inférieure à 30
// "normal" si entre 30 et 90
// "rapide" si supérieure à 90

function affichervitesse(vitesse){
if(vitesse<30){
    return "lent"
}if(vitesse>30 && vitesse<90){
    return "normal"
}if(vitesse>90)
    return "rapide"
}



// 4- Crée une fonction qui prend un nombre et retourne true
// s’il est divisible par 2 OU par 3
// MAIS PAS par les deux en même temps

function traiternombre(){
if(nombre % 2===0 || nombre % 3===0){

return "true"

}else {
    return "false"
}
}
