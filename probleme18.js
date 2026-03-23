/**
 * Trouve le premier élément qui apparaît un nombre pair de fois dans un tableau.
 * N'oublie pas de gérer les éléments avec plusieurs occurrences paires et retourne le premier.
 * Retourne null s'il n'y a aucun élément avec un nombre pair d'occurrences.
 * Exemple d'utilisation :
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); // 4
 */
//on va faire une condition ou est le nombre pair  on va rechercher par sa position



var evenOccurrence = function(arr) {
  var count=0
  for(var i=0;i<Array.length;i++){
if(Array[i] %2===0){
console.log(Array)
}
else{
  (Array[i]%2!==0)
    return null
  }
}
return Array;
  }

