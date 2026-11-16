export function formaterBadge(utilisateur) {
  if (!utilisateur || !utilisateur.nom) {
    return 'Utilisateur anonyme';
  }

  const ville = utilisateur.adresse?.ville ?? 'Ville inconnue';
  const points = utilisateur.points ?? 0;

  return `${utilisateur.nom} (${ville}) - ${points} pts`;
}

export function comparerStrict(a, b) {
  return a === b;
}