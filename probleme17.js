// Une liste de livres orientée objet !

// Créer une classe ListeDeLivres  
// Créer une autre classe appelée Livre  
var livre (titre,auteur,anne){
    return{
thistitre=titre,
thisauteur=auteur,
thisanne=anne,
    }
}
class listedelivres {
return(){
    this.livre=[]
}
}
// Les listes de livres doivent avoir les propriétés suivantes :
// - Nombre de livres marqués comme lus  
// - Nombre de livres marqués comme non lus  
// - Une référence vers le prochain livre à lire (objet Livre)  
// - Une référence vers le livre en cours de lecture (objet Livre)  
// - Une référence vers le dernier livre lu (objet Livre)  
// - Un tableau contenant tous les livres  

var listedelivres(nombreslivres,nombreslues,rochainelivrealire,livresencoursdelecture,dernierlivre) {
return {
nombreslivres=nombreslivres,
nombreslues=nombreslues,
prochainelivrealire=prochainelivrealire,
livresencoursdelecture=livresencoursdelecture,
dernierlivre=dernierlivre,
thislivre=[]
}
}
// Chaque Livre doit avoir plusieurs propriétés :
// - Titre  
// - Genre  
// - Auteur  
// - Lu (true ou false)  
// - Date de lecture : peut être vide, sinon doit être un objet JS Date()  
var livre(titre,genre,auteur,lu,datelecture){
return {
 thistitre=titre,
thisgenre=genre,
thisauteur=auteur,
thislu=true,
datelecture=Date,
}
}

// Chaque ListeDeLivres doit avoir quelques méthodes :

// .ajouter(livre)  
// → doit ajouter un livre à la liste des livres.

// .terminerLivreCourant()  
// → doit marquer le livre en cours de lecture comme "lu"  
// → lui donner une date de lecture avec new Date(Date.now())  
// → changer le dernier livre lu pour être le livre qui vient d’être terminé  
// → changer le livre en cours pour être le prochain livre à lire  
// → changer la propriété "prochain livre à lire" pour être le premier livre non lu trouvé dans la liste des livres  

ajouterlivre(livre){
    this.livres.push(livre)
this.nombreslivres++;
if(livre.lu){
    this.nombreslues++
}
this.datelecture=date.now()
terminerlivre(livre){
    if(!livre.lu){
        livre.lu=true
    }
this.nombreslues++;
this.dernierlivrelu=livre
}
this.prochainelivrealire=this.livre.find(1=>!1.lu)||null
mettreajourprochainelivrealire(){
    this.prochainelivrealire=this.livres.find(livre=>!livre.lu)||null;
}
}