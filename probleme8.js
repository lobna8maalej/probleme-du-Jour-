// 1- Crée une fonction qui prend un nombre et retourne true s’il est pair, sinon false.
function affichenombre(n){
for(var i=0;i<n;i++){
    if(n%2===0){
        return true;
    }else{
        return false;
    }
}
}


// 2- Crée une fonction pour inverser une chaîne donnée avec une boucle for
function inverserchaine(chaine){

var result=""
var j=chaine.length-1
for(var i=0;i<chaine.length;i++){
    result=chaine[i]-chaine[j]
}
   return(j)
} 

// 3- Crée une fonction pour supprimer le dernier élément d’un tableau et le retourner sans itérer
function supresiontableau(tableau){

return tableau.length-1
}  



// 4- Crée une fonction pour supprimer le premier élément d’un tableau et le retourner sans itérer
function supresiontableau(array){

    return array.shift();
}



// 5- Crée une fonction pour trouver le premier nombre divisible par 3 et 5 entre 1 et 50 avec une boucle while

function divisiblenombre(number){

var result=number
while(number>1,number<50){
    if(number%3===0&&number%5===0){

    }number++;
}console.log(number)

}