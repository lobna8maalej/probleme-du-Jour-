// commonCharacters:
/**
 *
 * Écrire une fonction qui prend deux chaînes de caractères en arguments
 * et retourne une chaîne contenant les caractères présents dans les deux chaînes
 * (sans duplication), dans l’ordre où ils apparaissent dans `a`.
 * N’oubliez pas d’ignorer les espaces et les caractères déjà rencontrés !
 *
 * Exemple : commonCharacters('acexivou', 'aegihobu')
 * Retourne : 'aeiou'
 *
 * Doit retourner null s’il n’y a aucun caractère en commun.
 *
 * on va faire var result =""
 */ //1ere boucle pour string1
 //2eme boucle pour string2
 //condition if pour verifier si un caractere de string1 existe dans string2
 // on va faire addition avec string1
 //ON va utiliser break pour eviter d'ajouter plusieurs fois
var commonCharacters = function(string1, string2) {

 var result=""
  for(var i=0;i<string1.length;i++){
    for(var j=0;j<string2.length;j++){
      if(string1[i]===string2[j]){
        result=result+string1[i]
      break;
      }
  }
}
  return result
};
