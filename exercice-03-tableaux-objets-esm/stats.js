export function promouvoirUtilisateur(utilisateur, nouveauRole) {
  return {
    ...utilisateur,
    role: nouveauRole,
  };
}
export function calculerTotalTTC(commandes, tva = 0.2) {
  return Number(
    commandes
      .filter(({ payee }) => payee === true)
      .map(({ ht }) => ht * (1 + tva))
      .reduce((total, montantTTC) => total + montantTTC, 0)
      .toFixed(2));
}
export function trouverCommande(commandes, id) {
  return commandes.find((commande) => commande.id === id) ?? null;
}