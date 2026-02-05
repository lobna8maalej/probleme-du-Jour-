// 1-Écris une fonction removeByIndex qui supprime l’élément à l’index donné et retourne le nouveau tableau.
function removeByIndex(tableau,index){
var newtable=[]
for(var i=0;i<tableau.length;i++){
    if(i!==index){
        newtable.push[tableau[i]]
    }
}
return newtable

}



// 2-Écris une fonction pick qui prend un objet et un tableau de clés, et retourne un nouvel objet avec seulement ces clés.
function pick(objet,tableau){
var newobjet={}
for(var i=0;i<tableau.length;i++){
    newobjet=objet[tableau[i]]


}
return newobjet;
}



//3- Écris une fonction mostFrequent qui prend un tableau et retourne la valeur qui apparaît le plus souvent dans un tableau.
function mostFrequent(tableau,value){
var max=1
var value
var objet={}
for(var i=0;i<tableau.length;i++){
    if(!objet.hasOwnproperty[tableau[i]]){
        objet[tableau[i]]=1
    }else{
        objet[tableau[i]]++;
    }
}
if(objet[tableau[i]]>max){
    objet[tableau[i]]=max
}value=tableau[i]



return value;




}