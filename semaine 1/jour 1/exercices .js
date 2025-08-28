//challenge 1
let or = 100;
let jours = parseInt(prompt("Combien de jours veux-tu voyager ?"));
let aujourdhui = 1;

while (aujourdhui <= jours) {
  console.log(`Jour ${aujourdhui} : ${or} pièces d’or`);

  if (aujourdhui % 2 === 0) {
    let taxe = Math.floor(or / 2);
    if (or >= taxe) {
      or -= taxe;
    } else {
      console.log(` Le voyageur a été expulsé au jour ${aujourdhui}`);
      break;
    }
  } else {
    if (or >= 3) {
      or -= 3;
    } else {
      console.log(` Le voyageur a été expulsé au jour ${aujourdhui}`);
      break;
    }
  }

  aujourdhui++;
}

if (aujourdhui > jours) {
  console.log(` Le voyageur a terminé son voyage avec ${or} pièces d’or`);
} else {
  console.log(` Le voyageur a survécu ${aujourdhui- 1} jours`);
}
//challenge 2
let personnes= parseInt(prompt("Combien de personnes vont jeter une pièce ?"))
let fontaine=0;
for (let i=0;i<=personnes;i++){
    fontaine*=2
    fontaine+=1
    if(fontaine % 7==0){
        fontaine=Math.floor(fontaine/2)
    }
    console.log(`Après la personne ${i}, la fontaine contient ${fontaine} pièces`);
}
console.log(`Total final : ${fontaine} pièces`);
// Challenge 3 

let mot = prompt("Entre le mot secret :");
let motTransformé = "";

for (let i = 0; i < mot.length; i++) {
  let char = mot[i];
  let estVoyelle = "aeiouAEIOU".includes(char);

  if (estVoyelle) {
    motTransformé += "*";
  } else if (i % 2 === 0) {
    motTransformé += char.toUpperCase();
  } else {
    motTransformé += char.toLowerCase();
  }
}

console.log(` Mot transformé : ${motTransformé}`);
// challenge 4 
let suspects = [12, 7, 19, 3, 25, 7, 3];
let max = Math.max(...suspects);
let min = Math.min(...suspects);
let somme = suspects.reduce((acc, val) => acc + val, 0);
let cible = 7;
let occurrences = suspects.filter(n => n === cible).length;
console.log(` Nombre le plus grand : ${max}`);
console.log(`Nombre le plus petit : ${min}`);
console.log(`Somme totale : ${somme}`);
console.log(` Occurrences du ${cible} : ${occurrences}`);
if (somme % 2 === 0) {
  console.log(" Enquête résolue !");
} else {
  console.log("Encore des mystères à élucider...");
}
