/**
 * 
 * Le param est un commentaire 
 * 
 * le boolean=                                                          @param{boolean} true/ false / response...
 * chaine de caractère=                                                 @param{string} 
 * Number (nombre) est utiliser pour un entier ou flottant              @param{number} nombre
 * 
 * 
 */
 
// LES VARIABLES 


 function maFonction() {

     var locale = "Je suis une variable locale";

     globale = "Je suis globale";
         console.log(locale); // Affiche "Je suis une variable locale"
};
maFonction();

console.log(globale); // Affiche "Je suis globale"

console.log(locale); // Affiche une erreur, locale n'est pas accessible ici


 // COMPARAISON IF ELSE (SI / SINON)


//Les instructions if et else servent à introduire des conditions pour permettre de n'exécuter du code que si celles-ci sont satisfaites.
//Elles correspondent aux termes français si et sinon.

if(porte_verrouillee) {
   deverrouiller_porte();
};
//Peut se traduire par :
//Si la porte est verrouillée alors déverrouiller la porte.

if(melon) {
   manger_melon();
}
   else{
     manger_chips();
};


 var frigo = {melon: 2, pasteque: 1, parme: 0 };
 

 // SI j'ai du melon ET du jambon de parme, 0 correspond à false en booléen
 if(frigo.melon && frigo.parme) { 

        manger(frigo.melon, frigo.parme);
 }
// SINON SI j'ai du fromage, retourne undefined qui correspond à false
      else if (frigo.fromage) { 

          manger(frigo.fromage);
 }
    else { // SINON

       if(frigo.pasteque) { // SI j'ai de la pastèque
        manger(frigo.pasteque);
    }
    else{
        manger("chips");
    }
 };


 /**
  *  LES FONCTIONS
  * 
  * 
  * Metre un Nom après le mots-clé function 
  */
  function bonjour() {
    console.log("Bonjour!");
 }
 //Ou assigner la fonction à une variable

 bonjour = function() {
    console.log("Bonjour!");
 }
 // bonjour contient une référence à la fonction. On pourrait dire qu’elle pointe du doigt la fonction elle-même.
 // Pour exécuter une fonction, on prend la variable bonjour qui lui fait référence et on lui accole des parenthèses.

 bonjour(); // La console affiche “Bonjour!”

// Une fonction peut aussi envoyer une valeur qui sera ainsi récupérée à l’endroit où la fonction a été lancée.

function bonjour() {
   return "Bonjour!";
}

salutations = bonjour();
console.log(salutations); // Affiche “Bonjour!”

/**
 * LES TABLEAUX ET OBJETS
 * 
 */
 var mon_tableau = [10, 20, 30, 40, 50];
 var frigo = {
    fruits: ["banane", "mangue", "cerise"],
    legumes: ["courgette", "tomate", "poireau"]
 };
 console.log(mon_tableau[2]); // Affiche 30
 console.log(frigo.fruits[0]); // Affiche "banane"
 
 var type = "legumes";
 console.log(frigo[type][1]); // Affiche tomate, si on utilise la notation par crochets [], on peut passer une variable à la place d'une clé
 
// .push() permet de rajouter un élément à un tableau.
 mon_tableau.push(100);

 console.log(mon_tableau); // Affiche [10, 20, 30, 40, 50, 100]

 //.pop() renvoie la dernière valeur du tableau tout en l'enlevant de celui-ci
 mon_tableau.push("banane"); // mon_tableau est maintenant égal à [10, 20, 30, 40, 50, 100, "banane"]

 console.log(mon_tableau.pop()); // Affiche "banane", mon_tableau est maintenant égal à [10, 20, 30, 40, 50, 100]

