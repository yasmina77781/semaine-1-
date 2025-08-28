
const creatures = [
  { nom: "Draco", type: "dragon", puissance: 90, magie: 70 },
  { nom: "Luma", type: "elfe", puissance: 85, magie: 80 },
  { nom: "Grim", type: "gobelin", puissance: 75, magie: 60 },
  { nom: "Aeris", type: "fée", puissance: 65, magie: 85 }
];


function afficherCreatures(tab) {
  tab.forEach(creature => {
    console.log(`Créature: ${creature.nom}, Type: ${creature.type}, Puissance: ${creature.puissance}, Magie: ${creature.magie}`);
  });
}


function combattre(c1, c2) {
 if (c1.puissance > c2.puissance) {
    console.log(`${c1.nom} gagne contre ${c2.nom}`);
    return c1.nom;
  } else if (c2.puissance > c1.puissance) {
    console.log(`${c2.nom} gagne contre ${c1.nom}`);
    return c2.nom;
  } else {
    if (c1.magie > c2.magie) {
      console.log(`${c1.nom} gagne par magie contre ${c2.nom}`);
      return c1.nom;
    } else if (c2.magie > c1.magie) {
      console.log(`${c2.nom} gagne par magie contre ${c1.nom}`);
      return c2.nom;
    } else {
      console.log(`Égalité parfaite entre ${c1.nom} et ${c2.nom}`);
      return null;
    }
  }
}
function tournoi(tab) {
  const resultats = {};
  tab.forEach(creature => resultats[creature.nom] = 0);

  for (let i = 0; i < tab.length - 1; i++) {
    const gagnant = combattre(tab[i], tab[i + 1]);
    if (gagnant) resultats[gagnant]++;
  }
}

afficherCreatures(creatures);
tournoi(creatures);
