
 // OBJECTIFS MANIPULER LE DOM

// #1 Manipuler le contenu d'une page internet
// #2 Ecouter les évènements
// #3 Prendre en compte le temps


//html//
// <p id=”bonjour”>
//    Titre
// </p>
// <p class=”contenu”>
//    <span>Contenu</span>
// </p>
// <p class=”contenu”>
//    <span>Contenu 2</span>
// </p>


// #1
// document.getElementById() est une méthode qui permet d’accéder à un élément à partir de son id.
document.getElementById("bonjour"); // Retourne le premier paragraphe

//document.getElementsByClassName() permet de récupérer une liste d’éléments par leur classe.
document.getElementsByClassName("contenu"); // Retourne les deuxième et troisième paragraphes

//document.getElementsByTagName() permet, lui, de récupérer une liste d’éléments par leur nom de balise.
document.getElementsByTagName("span"); // Retourne les deux span contenus dans les paragraphes

// Exemple autre 

//html//
//<a href="#top" id="link" class="ma_classe">Je suis un lien</a>

mon_lien = document.getElementById("link");

console.log(mon_lien.href); // Affiche le lien vers lequel pointe le <a>
console.log(mon_lien.id); // Affiche "link"
console.log(mon_lien.className); // Une exception : l'attribut class se récupère avec className

mon_lien.id = "nouvel_id"; // Modifie l’id de l’élément en "nouvel_id"
 

//La propriété textContent contient le texte de l’élément.

console.log(mon_lien.textContent); // Affiche "Je suis un lien"

mon_lien.textContent = "Bonjour! Je suis un lien"; // Modifie le contenu du <a>
 

//La méthode document.createElement() permet de générer en mémoire un nouvel élément DOM que je peux ensuite modifier avec les méthodes vues précédemment.

mon_paragraphe = document.createElement("p");
mon_paragraphe.id = "paragraph_id";
mon_paragraphe.textContent = "Je suis un paragraphe";

//appendChild() permet de rajouter un enfant à un élément DOM.
mon_lien.appendChild(mon_paragraphe); // Le <a> contient maintenant le <p> que j’ai généré
 

//Manipulation des styles
//On a ici, un élément p simple

//html//
//<p class="content big">Un paragraphe</p>
un_paragraphe = document.getElementsByTagName("p")[0]; // Retourne le premier paragraphe de la liste des <p> de la page
 

//La propriété className permet de récupérer toutes les classes de l’élément concerné.

console.log(un_paragraphe.className); // Affiche "content big"
un_paragraphe.className = "content small";

//Puisque className retourne toutes les classes de l’élément, si on doit modifier une classe, il faut réécrire le nom en entier.
//Il est aussi possible d’accéder à tous les styles de l’élément par des propriétés spécifiques.
//Ces propriétés ont les mêmes noms que leurs équivalents CSS à la différence près qu’ils sont écrits en camelCase (pas séparés par des tirets et chaque mot prend une majuscule sauf le premier).

un_paragraphe.style.backgroundColor = "#ff0000"; // Correspond au CSS "background-color : #ff0000"
un_paragraphe.style.fontSize = "40px"; // Correspond à "font-size : 40px"
console.log(un_paragraphe.style.backgroundColor); // Affiche "#ff0000


// #2 LES EVENEMENTS 

//On peut dire à une fonction de s'exécuter quand l'utilisateur clique sur un bouton ou bien quand il scroll la fenêtre ou encore quand il appuie sur une touche du clavier.
//En fonction du type d’événement que l’on souhaite, plusieurs possibilités :

//mouse (souris):

//click : au clic sur un élément

//mouseenter : la souris passe par dessus la zone qu’occupe un élément

//mouseleave : la souris sort de cette zone

//keyboard (clavier)

//keydown : une touche du clavier est enfoncée

//keyup : une touche a été relâchée

//fenêtre (window)

//scroll : défilement de la fenêtre

//resize : redimensionnement de la fenêtre

//form (formulaires)

//change : pour les éléments <input>, <select> et <textarea>, quand l’utilisateur change une de leurs valeurs

//submit : à l’envoi d’un formulaire

//document

//DOMContentLoaded : lancé quand le document HTML est complètement chargé et analysé sans attendre que les images et les CSS soient chargés

// #3 LES ECOUTEURS D' EVENEMENTS

//Pour déclarer un écouteur d’événement qui se chargera de lancer une action pour un événement donné, il y avait une syntaxe qui est aujourd’hui désuète :

//html//
//<a href=”#” onclick=”action()”>
//   Lien
//</a>

// OU BIEN 
//mon_element.onclick = action;

//Pour attacher un événement à un élément, on préférera la syntaxe moderne

mon_element.addEventListener(type, action);

//html//
//<form>
//   <input type=”text” id=”mon_input” />
//</form>
//<a href=”#” id=”mon_lien”>
//   Lien
//</a>
var mon_input = document.getElementById("mon_input"),

   mon_lien = document.getElementById("mon_lien"); // Je stocke les éléments dans des variables

var mon_action = function(){ // Définition d'une fonction qui sera associée plus loin à un événement sur un élément

   console.log(mon_input.value); // Affiche ce que l’utilisateur a écrit
}
var action_clic = function(){ // Définition d'une fonction qui sera associée plus loin à un événement sur un élément
   console.log("Clic!");
}
// Association des événements avec addEventListener
mon_input.addEventListener("change", mon_action);
mon_lien.addEventListener("click", action_clic);


//setTimeout permet de spécifier une fonction à exécuter au bout d’une durée définie.

function mon_action(){
   console.log("Bonjour");
}

setTimeout(mon_action); // Dans son expression la plus simple, setTimeout exécute une fonction dès que possible

setTimeout(mon_action, 1000); // En lui spécifiant un nombre, on indique la durée (en millisecondes) au bout de laquelle on veut exécuter la fonction

var id_timeout = setTimeout(mon_action, 1000); // La fonction setTimeout retourne un identifiant qui fait référence au compteur


//setInterval est une version plus sophistiquée de setTimeout.
//Au lieu de spécifier la durée au bout de laquelle la fonction s'exécuter, on dit à la fonction de s'exécuter toutes les x millisecondes.

var id_interval = setInterval(mon_action, 1000); // mon_action sera exécutée toutes les secondes

//clearInterval permet de stopper l’exécution de la fonction définie par setInterval.
clearInterval(id_interval); // Spécifier la référence du compteur qu’on aura préalablement sauvegardée

//On peut, avec ces fonction, fabriquer un compteur simplement

var i = 10;

var id_interval = setInterval(function(){ // Sauvegarder la référence au compteur

   if(i < 0){ // Si la variable est inférieure à 0, on arrête le compteur
       clearInterval(id_interval); // Supprimer le compteur
   }
   else{
       console.log(i);
       i--; // Sinon, décrémenter la variable
   }
}, 1000); // Toutes les secondes // Toujour en millième de seconde //