 // 1 - Écris une fonction nommée removeElement qui prend un tableau et une valeur
 // en paramètres et retourne un nouveau tableau avec la première occurrence
 // de cette valeur supprimée. Si la valeur n’est pas trouvée, retourne le tableau original
 function removeElement(tableau,valeur){
var newtable=[]
var x=tableau.indexof(valeur)
if(x===-1){
    return tableau
}
for(var i=0;i<tableau.length;i++){
    if(i!==x){
        newtable.push(tableau[i])
    }
}
return newtable
 }

 // 2 - Écris une fonction appelée reverseStr qui prend une chaîne de caractères
 // en entrée et retourne l’inverse de chaque lettre suivie d’un nombre
 // en commençant par zéro (à résoudre avec une boucle while).
 // exemple : reverseStr('hello'); ==> "o0l1l2e3h4"
function reverseStr(chaine){
var result=0
var i=chaine.length-1
var counter=0
while(i>=0){
    result+=chaine[i]+counter
i--;
counter++;
}

return result;
}


 // 3- Écris une fonction nommée objKey qui prend un objet en paramètre
 //  et retourne un tableau contenant les clés de l’objet.
 // objKey({name:'ahmed', age:20}) ==> ['name','age']
function objKey(objet){
  return Object.keys(objet);
}

 var result=objKey({name:'ahmed', age:20} );   // ← ici on récupère le return
console.log(result);




// 4- Prends un tableau et supprime chaque deuxième élément de ce tableau.
// Garde toujours le premier élément et commence à supprimer à partir de l’élément suivant.
// Exemple :
// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
// removeEveryOther(myArr) ==> ['Keep', 'Keep', 'Keep']

function removeElement(tableau){
for(var i=1;i<tableau.length;i++){
    tableau.splice(i,1)
}
return tableau;
}
removeElement(['Keep', 'Remove', 'Keep', 'Remove', 'Keep'])

remove ([])