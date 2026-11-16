export const calculerTTC = (ht, tva = 0.2) => Number((ht * (1 + tva)).toFixed(2));
export function filtrerMotsLongs(mots, minLongueur = 4) {
  const resultat = [];

  for (const mot of mots) {
    if (mot.length >= minLongueur) {
      resultat.push(mot);
    }
  }
  return resultat;
}
export function creerCompteur(depart = 0) {
  let valeur = depart;

  return {
    incrementer() {
      valeur += 1;
      return valeur;
    },
    lire() {
      return valeur;
    }
  };
}