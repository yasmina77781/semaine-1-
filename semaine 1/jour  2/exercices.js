//exercice 1 

function addition(a, b) {
  return a + b;
}
const addition = (a, b) => a + b;
//exercice 2
const multiplierParDeux = tableau => tableau.map(n => n * 2);
//exercice 3 
const saluer = nom => `Bonjour, ${nom}!`;
//exercice 4
const personne = { nom: "Ali", age: 25, ville: "Casablanca" };
const { nom, age } = personne;
 nom = personne.nom;
 age = personne.age;
//  exercice 5
const nombres = [10, 20, 30, 40];
const [premier, , troisieme] = nombres;
// exercice 6
function saluer({ nom, prenom }) {
  return `Bonjour ${nom} ${prenom}`;
}
// exercice 7
const nom1 = "Alex";
const age1 = 25;

console.log(`Bonjour ${nom}, tu as ${age} ans`);
"Bonjour " + nom + ", tu as " + age + " ans"
// exercice 8
function additionMessage(a, b) {
  return `Le résultat de ${a} + ${b} est ${a + b}`;
}
// exercice 9
function somme(...nombres) {
  return nombres.reduce((acc, val) => acc + val, 0);
}
// exercice 10
const fruits = ["pomme", "banane", "orange", "kiwi"];
const [premier2, ...autres] = fruits;
// exercice 11
const tab1 = [1, 2, 3];
const tab2 = [4, 5, 6];

const fusion = [...tab1, ...tab2];
// exercice 12
const user = { nom: "Ali", age: 25 };
const userCopie = { ...user, pays: "Maroc" };

