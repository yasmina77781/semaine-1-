//challenge 1
function carre(nombre){
    return nombre*nombre
}
function Miroir(texte) {
  let miroir = "";
  for (let i = texte.length - 1; i >= 0; i--) {
    miroir += texte[i];
  }
  return miroir;
}
function Balance(a, b) {
  return a > b ? a : b;
}
let choix = prompt("Quel sage veux-tu consulter ? (carre, miroir, balance)");

let resultat;

if (choix === "carre") {
  let n = parseInt(prompt("Entre un nombre :"));
  resultat = carre(n);
} else if (choix === "miroir") {
  let texte = prompt("Entre une chaîne de caractères :");
  resultat = Miroir(texte);
} else if (choix === "balance") {
  let x = parseInt(prompt("Premier nombre :"));
  let y = parseInt(prompt("Deuxième nombre :"));
  resultat = Balance(x, y);
} else {
  resultat = " Choix invalide. Aucun sage ne comprend ta demande.";
}
console.log(`Résultat du sage : ${resultat}`);

//challenge 2
function majuscules(mot) {
  let resultat = "";
  for (let i = 0; i < mot.length; i++) {
    resultat += i % 2 === 0 ? mot[i].toUpperCase() : mot[i].toLowerCase();
  }
  return resultat;
}

function remplacerVoyelles(mot, symbole) {
  const voyelles = "aeiouAEIOU";
  let resultat = "";
  for (let char of mot) {
    resultat += voyelles.includes(char) ? symbole : char;
  }
  return resultat;
}
function inverserMot(mot) {
  return mot.split("").reverse().join("");
}

let mot = prompt("Entre un mot à transformer :");
let sort = prompt("Quel sort veux-tu utiliser ? (alterné, voyelle, inversé)");

let motTransformé;

if (sort === "alterné") {
  motTransformé = majuscules(mot);
} else if (sort === "voyelle") {
  let symbole = prompt("Quel symbole veux-tu utiliser pour remplacer les voyelles ?");
  motTransformé = remplacerVoyelles(mot, symbole);
} else if (sort === "inversé") {
  motTransformé = inverserMot(mot);
} else {
  motTransformé = " Sort inconnu. Le grimoire refuse d’agir.";
}
console.log(` Mot transformé : ${motTransformé}`);
//challenge 3

function doubleur(nombre) {
  return nombre * 2;
}
function pairOuImpair(nombre) {
  return nombre % 2 === 0 ? nombre + 10 : nombre - 5;
}
function mystere(nombre) {
  return nombre < 20 ? nombre * nombre : Math.floor(nombre / 2);
}
let pieces = parseInt(prompt("Combien de pièces d’or possèdes-tu ?"));
let coffre = prompt("Quel coffre veux-tu ouvrir ? (doubleur, pair, mystere)");

let resultat2;

if (coffre === "doubleur") {
  resultat = doubleur(pieces);
} else if (coffre === "pair") {
  resultat = pairOuImpair(pieces);
} else if (coffre === "mystere") {
  resultat = mystere(pieces);
} else {
  resultat = "Coffre inconnu. Le pirate est confus...";
}
console.log(` Résultat : ${resultat2} pièces d’or`);
//challenge 4 
let pierres = [12, 7, 19, 4, 8, 3, 10];
function extrairePairs(tableau) {
  return tableau.filter(n => n % 2 === 0);
}
function sommer(tableau) {
  return tableau.reduce((acc, val) => acc + val, 0);
}
function renverser(tableau) {
  return [...tableau].reverse(); 
}
let choix1 = prompt("Quel enchantement veux-tu appliquer ? (pairs, somme, renverser)");
let resultat3;

if (choix1 === "pairs") {
  resultat3 = extrairePairs(pierres);
} else if (choix1 === "somme") {
  resultat3 = sommer(pierres);
} else if (choix1 === "renverser") {
  resultat3 = renverser(pierres);
} else {
  resultat3 = " Enchantement inconnu. L’architecte est perplexe...";
}


console.log(" Rangée analysée :", pierres);
console.log("Résultat :", resultat3);
