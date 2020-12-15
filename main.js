// Créer un jeu simple de devinette de nombre. Le jeu choisit aléatoirement un nombre 
// entre 1 et 100, puis il met le joueur au défi de le deviner en 10 tentatives maxi.À chaque tour, le 
// joueur doit être informé s'il a deviné ou non le bon nombre — si ce n'est pas le cas, le jeu lui 
// indique si son estimation est trop basse ou trop élevée.Le jeu se termine quand le joueur a deviné le nombre mystère, ou 
// s'il a épuisé ses 10 chances. À la fin du jeu, le joueur a la possibilité de débuter une nouvelle 
// partie.
//Bonus : Le jeu doit également rappeler au joueur les 
// nombres déjà proposés




let Nmystere;
let Joueur2;
let vcompteur = 0;

const entierAleatoire = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const resultat = entierAleatoire(1, 100);
console.log (resultat);



while (resultat !== Joueur2) {
    Joueur2 = prompt("Joueur 2 : Devinez le nombre mystère");

    vcompteur++;
    if (Joueur2 < resultat) {
        console.log("C'est plus grand que " + Joueur2 + " !");
    } else if (Joueur2 > resultat) {
        console.log("C'est plus petit que " + Joueur2 + " !");
    } else if (Joueur2 == resultat){
        console.log("Bravo, vous avez trouvé le nombre mystère");
         break }
    if (vcompteur >= 5) {
        console.log("Perdu");
        break;
    }
}

//1 L'ordinateur doit choisir un chiffre random entre 1 et 100 avec Mathrandom(0, 100)

//2 Le joueur doit deviner le chiffre avec prompt

//3 Condition : Si le joueur dit un chiffre plus grand, il doit etre ecrit "Plus Petit" et l'inverse.

//4 Le joueur a un nombre de tentative limité (10) donc ajouter un condition supplémentaire si le joueur dépasse les 10 tentative (avec un if et un break)