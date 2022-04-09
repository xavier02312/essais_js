/**
 * CAROUSEL
 * 
 */
//Chemin ou sont les images
const path = "Images/slide/";
//Tableau d' images
const pictures = ["01.jpg", "02.jpg", "03.jpg"];
//Image du slider
const picture = document.querySelector(".slider img");
//Compteur
let counter = 0;

//Ecouteur d'évènement sur la flèche
const arrowRight = document.querySelector(".fleche-droite");
arrowRight.addEventListener("click", () => {
//déclaration du timer pour interval
let timer;

let autoSlide = () => {
    //si le compteur est égal à l'index final du tableau, alors on le réinitialise à 0(on repart au début du tableau)
    if (counter === pictures.length - 1) {
        counter = 0;
    }
    else {
        //Sinon on ajoute 1 à notre compteur
        counter++;
    }

    //Modifie l'atribut "src" de l'image en sélectionnant l'élément suivant du tableau
    picture.src = `${path}${pictures[counter]}`;
});
}

//Ecouteur d'évènement sur la flèche
const arrowRight = document.querySelector(".fleche-droite");
arrowRight.addEventListener("click", autoSlide);



const arrowLeft = document.querySelector(".fleche-gauche");
arrowLeft.addEventListener("click", () => {
        //si le compteur est à zero je suis au début du tableau
    if ( counter === 0) {
        //on met à jour le compteur avec le dernier index du tableau
        counter = pictures.length -1;
    }
    else {
        //Sinon on décremente de 1
        counter -= 1;                                       // "-="" sinifie partire de la fin des images
    }
    //Modifie l'attribut "src" de l'image en sélectionnant l'élément suivant du tableau
    picture.src = `${path}${pictures[counter]}`;
});

//Défillement automatique

 picture = document.querySelector(".slider img") = slide[counter];

setInterval("ChangeSlide(1)", 5000);


//Fonction pour arrêter le carousel
const stopCarousel = () => {
    //"Tue" le setInterval
    clearInterval(timer);
}

//fonction permettant de démarer le carousel en automatique
const startCarousel = () => {

    //appelle la fonction "autoSlide" toute les 2 secondes
    timer = setInterval(autoSlide, 2000);
}
startCarousel();
//Quand le pointeur de la souris et sur le carousel , on stop le setInterval()
picture.addEventListener("mouseover", stopCarousel);
picture.addEventListener("mouseout", startCarousel);

arrowRight.addEventListener("mouseover", stopCarousel);
arrowRight.addEventListener("mouseout", startCarousel);

arrowLeft.addEventListener("mouseover", stopCarousel);
arrowLeft.addEventListener("mouseout", startCarousel);

