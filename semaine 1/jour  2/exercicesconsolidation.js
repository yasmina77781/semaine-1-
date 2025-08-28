// exercice 1
let tableau = [];
console.log(tableau); 
tableau.push("Ali");
tableau.push("Sara");
tableau.push("Yasmine");
console.log(tableau);
tableau.pop();
console.log(tableau);
// exercice 2 
let noms = ["Alice", "Bob", "Charlie"];
console.log(noms); 

noms.unshift("Zara");
console.log(noms); 

noms.shift();
console.log(noms); 
// exercice 3
let nombres = [1, 2, 3, 4, 5];
let doublés = nombres.map(n => n * 2);
console.log(doublés); 
// exercice 4
let valeurs = [10, 15, 20, 25, 30];
let filtrés = valeurs.filter(n => n > 20);
console.log(filtrés); 
// exercice 5
let fruits = ["pomme", "banane", "orange"];
fruits.forEach(fruit => console.log(fruit.toUpperCase()));
// exercice 6
let chiffres = [5, 10, 15, 20];
let somme = chiffres.reduce((acc, val) => acc + val, 0);
console.log(somme); 
// exercice 7
let personnes = ["Alice", "Bob", "Charlie", "David"];
personnes.splice(2, 1, "Eve"); 
console.log(personnes); 
// exercice 8
let tableau2 = [1, 2, 3, 4, 5, 6];
let extrait = tableau2.slice(2, 5);
console.log(extrait); 
// exercice 9
let fruits2 = ["pomme", "banane", "orange"];
if (fruits2.includes("banane")) {
  console.log("Banane est dans le tableau ");
} else {
  console.log("Banane n'est pas dans le tableau ");
}



