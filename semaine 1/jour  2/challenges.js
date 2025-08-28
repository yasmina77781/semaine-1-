// challenge 1 
let cles = 3; 
let tentatives = 10;

for (let i = 1; i <= tentatives; i++) {
  if (i % 2 === 1) {
    cles += 2; 
  } else {
    cles -= 1; 
  }

  if (cles >= 10) {
    console.log(` Bravo, la porte s’est ouverte avec ${cles} clés !`);
    break;
  }

  if (i === tentatives) {
    console.log(`Dommage, le joueur n’a pas réussi et il lui reste ${cles} clés.`);
  }
}
// challenge 2

const noms = ["Thor", "Athena", "Hercule"];
const heros = noms.map(nom => ({
  nom,
  force: Math.floor(Math.random() * 10) + 5, 
  vie: Math.floor(Math.random() * 30) + 20   
}));


function combat(h1, h2) {
  let a = { ...h1 };
  let b = { ...h2 };

  while (a.vie > 0 && b.vie > 0) {
    b.vie -= a.force;
    if (b.vie <= 0) break;
    a.vie -= b.force;
  }

  const gagnant = a.vie > 0 ? a : b;
  console.log(`🏆 ${gagnant.nom} a gagné contre ${a.nom === gagnant.nom ? b.nom : a.nom} avec ${gagnant.vie} points de vie restants.`);
  return gagnant;
}
let champion = heros[0];
for (let i = 1; i < heros.length; i++) {
  champion = combat(champion, heros[i]);
}

console.log(`👑 Le grand champion est ${champion.nom} avec ${champion.vie} points de vie !`);

