
// 1- Crée une fonction qui prend une heure (0–23) et retourne :
// "matin" si < 12
// "après-midi" si entre 12 et 18
// "soir" si > 18
function heurevalide(heure){
if(heure<12){
    return //matin
}if(heure<12 && heure>18){

    return //apres midi
}
if(heure>18){

    return //soir
}

}

// 2- Crée une fonction qui prend un score et retourne :
// "excellent" si score >= 90
// "bon" si score >= 70
// "moyen" si score >= 50
// "faible" sinon
function scorevalide(score){

}
   if(score>=90){
    return "excellent"
}if(score>=70){

    return "bon"
}if(score>=50){
    return"moyen"
}else {
    return "faible"
}





// 3- Crée une fonction qui prend trois nombres et retourne le **plus petit** des trois

function pluspetit(a,b,c){
    if(a>=b &&a>=c){
        return "a"
    }if(b>=a && c>=a){
return "b"

    }if(c>=a && c>=b){

        return "c"
    }
}



