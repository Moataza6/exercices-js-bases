export function attendre(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export async function chargerProfil(id) {
  await attendre(50);

  if (typeof id !== 'number' || Number.isNaN(id) || id <= 0) {
    throw new Error('ID invalide');
  }
  return {
    id,
    nom: `Profil #${id}`,
    actif: true,
  };
}
export async function recupererProfilSecurise(id) {
  try {
    const profil = await chargerProfil(id);
    return { ok: true, data: profil };
  } catch (err) {
    return { ok: false, erreur: err.message };
  }
}