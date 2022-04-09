/**
 * LES FONCTIONS & Ecouteur d' événement
 */
 function nomDeLaFonction() {
    //...
}

let nomDeFonction = function() {
    console.log("Tu viens de m'appeler");
let nomDeFonction = function(prenom, nom = "doe", age = 10) {   //parametre ou argument => prenom//

    let phrase = `Bonjour ${prenom}`;

    if (nom !== "doe") {
        phrase += ` ${nom}`;
    }                                                           //if permet d' ajouter "doe" et age=10
    //                                                          //if permet d' ajouter age=10
    if (age !== null) {
        phrase += `, tu as ${age} ans`;
    }

    // console.log(phrase);                                      //Ma 2ème phrase en console est completter
    return phrase;

   // console.log(`Bonjour ${prenom} ${nom}, tu as ${age} !`);  // se qui est en fonction reste en fonction//
};
let nomFonction = () => {
    //...
};

nomDeFonction(); 
nomDeFonction("xavier", "paqueriaud", 38);                      //console => xavier 
// nomDeFonction("Marcelle");                                   //console => Marcelle        

let brouette = "xavier";
let lastName = "paqueriaud";                                    // on peux déclarer autre variable
let number = 38;

// l' orde des argument importants, les respecter
let phraseBienvenue = nomDeFonction(brouette, lastName, number);
console.log(phraseBienvenue);
// nomDeFonction("jérome");                                      // valeur de console de la 2ème phrase
document.querySelector("body").innerText = phraseBienvenue;      //Afficher dans le body

/**
 * Fonction recursive
 * ATTENTION § SI AUCUN ARRET? BOUCLE INFINIE       
 */
let addition = function(number, limit) {

    if (number != limit) {
        number += 1;
        console.log(number);
        addition(number, limit);
    }
    return true;                                
};
/**
 * Entrainement
 */
//Selectionner le champs text du nom

const lastName = document.querySelector("#lastname");

// Applique un écouteur d'évènement sur les chamgements
// effectués dans le champs
lastName.addEventListener(`input`, () => {                  //écouter d'événement

    //Vérifie si le champs est vide ou pas
    const response = notEmpty(lastName.value);

    //Récupère le champs pour gérer l'erreur si besoin
    const error = document.querySelector("#lastnameError");

    if (response) {
        // Affiche des bordures vertes si tout va bien
        lastName.style.border = "2px solid green";          
        error.style.display = "none";   
    }
    else {
        //Affiche un message d'erreur si tout ne va pas bien :(
            error.innerText = "Le nom est obligatoire";
            error.style.display = "block";
            lastName.style.border = "2px solid red";
    }
});

//FONCTION
/**
 * Vérifie que la donnée ne soit pas vide
 */

const notEmpty = (value) => {
    if (typeof value !== "string" || value.length === 0) {
        return false;
    } else { 

    return true;
 }}; 

 /**
  *  Exercice Todo
  *  Ecouteur d' événement
  */
 /**
 * Fonction JS
 */
/**
 * Permet d' afficher les éléments dans notre liste
 */
const viewTodo = (todos) => {
    //Récupère la liste dans notre HTML
    const ul = document.querySelector("ul");
    //vide la liste avant de la remplir
    ul.innerText = "";
    //Boucle sur le tableau contenant les éléments de notre liste
    //--
    //item : la valeur de l'élément du tableau en cours
    //index : l'index de l'élément du tableau en cours
    todos.forEach((item, index) => {
        
        //création d'une "li"
        //<li class="list-group-item d-flex justify-content-between">An item</li>
        const li = document.createElement("li");
        li.classList.add("list-group-item", "d-flex", "justify-content-between");
        li.innerText = item;
        //Création d'un lien hypertext
        //<a href="#" class="deleteItem"></a>
        const a = document.createElement("a");
        a.id = `item-${index}`;
        a.href = "#";
        a.classList.add("deleteItem");
        //Création d'une "image"
        //<img src="imgs/trash.svg" alt="Delete item" class="icon-delete">
        const img = document.createElement("img");          
        img.setAttribute("src","imgs/trash.svg");           // ou img.src = "imgs/trash.svg"
        img.setAttribute("alt", "Delete item");             // ou img.alt="Delete item"
        img.classList.add("icon-delete");  
        
        //Inclure l'image dans le lien hypertext
        a.append(img);
        //Inclure le lien hypertext dans la "li"
        li.appendChild(a);
        //Ajoute la "li" en fin de liste
        ul.appendChild(li);
    });
    //Applique les écouteurs d'évènements sur les liens de suppression
    eventslink(todos);

    //Applique les écouteurs d'évènement sur les li
    strikeOutItem();
}
/**
 * Applique un écouteur d'évènement sur tous les lien de suppression
 */
const eventslink = (todos) => {
    //Récupère tous les boutons de suppression
const links = document.querySelectorAll(".deleteItem");
//Ajoute un écouteur d'évènement sur les boutons de suppression
links.forEach(link => {
    link.addEventListener("click",() => {
        removeItem(link.id, todos);
    });
});
}
/**
 * Supprimer un élément de la liste et du tableau
 *  
 */
const removeItem = (id, todos) => {
    
   //Extraire le numéro de la chaîne
const index = id.split("item-");
console.log(index[1]);
    //Supprimer un élément du tableau todos
    todos.splice(index[1], 1);
    //Rafraichit la liste 
    viewTodo(todos);
}

/**
 *  Permet de rayer un élément de la liste
 */
const strikeOutItem = () => {

    const item = document.querySelectorAll("li");
    item.forEach(item => {
        item.addEventListener("click", () => {
            item.style.textDecoration = "line-through";         //boucle à l'intèrieure pour effectuer une action
        });
    })
}