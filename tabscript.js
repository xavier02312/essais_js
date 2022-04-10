/**
 *   LES TABLEAUX 
 */
// Déclarer un tableau

let tableau = [34, "Welcome back!", 4.67, true];
console.log(tableau);

// L'index d'un tableau démarre toujours à zéro
// Extrait la valeur située en deuxième position
console.log(tableau[1]);

// Undefined car cet index n'existe pas
console.log(tableau[5]);

//demande combien il y a d' index longeur du tableau
console.log(tableau.length);

// Lire un tableau au complet
for (let i = 0; i < tableau.length; i++) {
    console.log(tableau[i]);
}
// forEach()
tableau.forEach(item => {
    console.log(item);
});

// for... in
// Extrait l'index du tableau
for (const item in tableau) {
    console.log(tableau[item]);
for (const index in tableau) {
    console.log(index, tableau[index]);
}
//for.. of
// Extrait la valeur du tableau
for (const item of tableau) {
    console.log(item);


/**
 * tableau multidimensionnel
 */

 let departements =[
    [10,"aube"],
    [30, "Gard"]

];

// [[10, "aube"]];
departements.forEach(item => {
    // [10, "aube"]
    item.forEach(dpt => { 
        //10
        console.log(dpt);
    })
});

/**
 *  Le type "objet"
 */
/** Collection de propriétés contenant des clés et valeur
 * 
 */
let personnage = {
    firstName: "Xavier" ,
    lastName: "Paqueriaud" ,
    address: {
        city: "Pont-de-Vaux"
    }
};

console.log(personnage. lastName);  //retourne Paqueriaud 

console.log(personnage. address .city);  // retourne Pont-de-Vaux

// ou console.log(personnage. lastName, personnage. address. city);

/**
 *  exemple 
 */
 let prenoms = ["paul", "fred", "rose", "solen", "marie"];

 console.log(prenoms);

for (const prenom of prenoms) {
 console.log(prenom);
}
// Ajoute une nouvelle valeur en fin de tableau                     /** for ( ...of... ) {console.log(prenom)}; */
// queleque soit le type (string, int, bool...)
prenoms.push("Jean");
console.log(prenoms);

// splice() permet de choisir l'emplacement où vous voulez
// ajouter votre nouvelle valeur.
// Premier paramètre : index où metre la nouvelle valeur
// deuxième paramètre : 0 (sinon suprime des éléments)
// troisième paramètre : la valeur à ajoutée
prenoms.splice(1, 0, "Romain");
console.log(prenoms);/** */

// Supprime la valeur positionnée à l' index 2
//prenoms.splice(2, 1);
//console.log(prenoms);

// Stock les résultats filtrés dans une nouvelle variable
let filtered = prenoms.filter((value, index, array) => {
    // Retourne toutes les valeurs sauf celui ayant
    // l'index numéro 2
    return index !== 2;
});

console.log(prenoms);
console.log(filtered);

// #4
let lastName = ["cole", "jacque", "xavier"];

console.log(lastName);

// forEach 
lastName.forEach(item => {
    console.log(item);
});

// #5
// fusion 2 tableaux

// Associe 2 tableaux en un et stock le nouveau tableau
// dans une variable
let nouveau = lastName.concat(prenoms);
console.log(nouveau);

// Spread operator => ...
// Affecter par décomposition
let nouveauTableau =[...lastName, ...prenoms];
console.log(nouveauTableau);


let index = 0;
while(index < nouveauTableau.length) {
    console.log(nouveauTableau[index]);
    index++;
}

/**
 * Utiliser le tableau suivant
 */
 let numbers = [12, 56, 83, 45, 7, 56, 4, 14, 29];
 /**
  * 1. Multiplier par 2 chaque valeur de ce tableau et afficher les résultats dans la console.
  */
 /*for (let i = 0 ; i < numbers.length; i++ ) {
 /*   console.log(numbers [i] * 2);
 /*}*/
 numbers.forEach(number => {
     console.log(number * 2);
 })
 
 
 /**
  * 2. Afficher la moyenne du tableau en utilisant la fonction reduce().
  *    Si la moyenne est une décimale, limité le nombre après la virgule à 2.
  */
 const total = numbers.reduce((somme, nombre) => somme + nombre);
 console.log(total);
 
 const moyenne = total / numbers.length;
 console.log(moyenne.toFixed(2));            /**toFixed arrondi à 2 chiffres apres la virgule */
 
 /**
  * 3. Extraire tous les nombres impairs de ce tableau. Utiliser l'instruction filter()
  */
 const impairs = numbers.filter(number => {
     return number%2 === 1;
 });
 
 console.log(impairs);

 /**
 * Utiliser le tableau suivant
 */
const visiteurs = [
    ['Gérard', 'Freschi', 'gfreschi0@discuz.net'],
    ['Bendicty', 'Foster-Smith', 'bfostersmith1@mysql.com'],
    ['Michelle', 'Draude', 'mdraude2@csmonitor.com'],
    ['Cathee', 'Meineck', 'cmeineck3@t-online.de'],
    ['Marianna', 'Coal', 'mcoal4@creativecommons.org'],
  ];
  /**
   * 1. Vérifier si le nom de famille "Meineck" existe dans le tableau. Afficher un message en conséquence.
   */
  //solution #1
  for (let i = 0; i < visiteurs.length; i++) {
  //console.log(visiteurs [i]);                         vérifie ce qui à dans le tableau
  
  for (let j = 0; j < visiteurs[i].length; j++) {
  //console.log(visiteurs[i][j]);                       vérifie ce qui à dans le tableau
    if (visiteurs[i][j] === 'Meineck') {
        console.log('Hey ho ! Salut toi !');
        break;                                            /**permet de stopper la boucle */
    }                                                     /**Ne fonctionne pas avec un .forEach() */
      else {
        console.log('Je ne te connais pas ');
      }
   }
  }
  //solution #2
  visiteurs.forEach(visiteur => {
    if (visiteur.includes("Meineck")) {                         //.includes() permet de vérifier si une valeur est présente
      console.log('Hey ho ! Salut toi ! #2');                   // dans le tableau
    }
  })
  
/**
 * 2. Trier le tableau par ordre alphabétique selon les prénoms.
 */
 visiteurs.sort();                         //.sort() sera utile pour trier par orde alphabetique
 console.log(visiteurs);
 
 
 /**
  * 3. Créer un tableau contenant que les adresses e-mails en utilisant l'instruction map().
  */
  const emails = visiteurs.map(visiteur => {
   return visiteur[2];   
   });
 
   console.log(emails);