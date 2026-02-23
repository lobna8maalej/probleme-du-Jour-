
// J’ai un seau de paresseux. Chaque paresseux est spécial et possède un nom long.
// Ci-dessous se trouve un tableau appelé seauDeParesseux, contenant toutes les informations sur mes paresseux.
var seauDeParesseux = [
  { nom: { prenom: "Poilu", deuxiemePrenom: "Dangereux", nomDeFamille: "Assassin" }, age: 2 },
  { nom: { prenom: "Lent", nomDeFamille: "Citrouille" }, age: 3 },
  { nom: { prenom: "Balle", deuxiemePrenom: "Blindé", nomDeFamille: "Paresseux" }, age: 4 },
  { nom: { prenom: "Bisou", deuxiemePrenom: "Bisou", nomDeFamille: "Chignon" }, age: 5 },
  { nom: { prenom: "Jungle", nomDeFamille: "Duveteux" }, age: 2 },
];

// a- écrire une fonction fullName qui prend en entrée un index et un tableau
// et retourne le nom complet sous forme de chaîne de caractères
// nomComplet(seauDeParesseux,0) //==> "Poilu Dangereux Assassin"
function noncomplet(tableau, position) {
  return { ...el,nom:"elprenom+"-"-" +"deuxiemePrenom"+"-"+"nomdeFamille" }
return fullName
}

// b- écrire une fonction qui prend un tableau d’objets (comme seauDeParesseux)
// et retourne le paresseux (doit retourner un objet)
// qui possède le nom le plus long (prénom, deuxième prénom & nom).
// Remarque : il peut être utile d’utiliser la fonction nomComplet,
// plusLongNom(seauDeParesseux);
// => { nom: { prenom: "Poilu", deuxiemePrenom: "Dangereux", nomDeFamille: "Assassin" }, age: 2 }
function plusLongNom(seauDeParesseux) {
  return {...Nom,prenom:""+"deuxiemePrenom"+"nomDeFamille"}
  }


// - créer un modèle de données pour représenter vos camarades de classe
// - réfléchir aux différents attributs de vos camarades : qu’ont-ils tous en commun ?
// - créer une fonction factory (fonction d'usine).
// - créer un tableau pour contenir les camarades que vous avez créés.
// - écrire une fonction appelée afficherAmi qui prend un camarade en argument
//   et retourne les informations importantes de manière lisible.
// - écrire une fonction appelée ajouterAmi qui prend un camarade en argument
//   et l’ajoute au tableau camarades.
// - calculer le nombre d’amis masculins que contient votre classe
//   en écrivant une fonction appelée nombredeMale.
// - écrire une fonction recherche qui, étant donné une requête (query)
//   et un tableau de camarades ,
//   cherche dans le tableau des camarades un camarade « correspondant ».
function attributscamarades(nom1,nom2,nom3,nom4,nom5){

return {
nom1:nom1,
nom2:nom2,
nom3:nom3,
nom4:nom4,
nom5:nom5,
}
  
}
var camarades=attributscamarades(nedya,khouloud,ahlem,yosra,fatma)

var camarades=[nom1,nom2,nom3,nom4,,nom5,nom6]

function affichercamarades(){
  return nom1.nom+nom2.nom+nom3.nom+nom4.nom+nom5.nom
console.log(camarades)

}

function ajoutercamarades(ami){
var counter=0
for(var i=0;i<ami.length;i++){
  counter=counter+1
}

return counter;
}