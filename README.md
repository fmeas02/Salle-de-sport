# APEX Gym — site vitrine premium

Site complet pour une salle de sport fictive : hero vidéo, présentation, abonnements, planning des cours, réservation interactive, coachs, galerie, avis, FAQ, contact avec carte, mentions légales et politique de confidentialité.

Toutes les données (adhérents, coachs, horaires, avis) sont fictives, à but de démonstration.

## Ce que contient ce dossier

```
package.json
app/
  layout.js
  globals.css
  page.js                          ← page principale, toutes les sections
  mentions-legales/page.js
  politique-de-confidentialite/page.js
```

## Avant de mettre en ligne : récupère ta clé Web3Forms

Le site a deux formulaires connectés (réservation de cours + contact), tous deux utilisent la même clé.

1. Va sur [web3forms.com](https://web3forms.com)
2. Entre l'adresse email où tu veux recevoir réservations et messages
3. Clique **Create Access Key**, récupère la clé reçue par email
4. Ouvre `app/page.js`, remplace `COLLE_TA_CLE_ICI` (tout en haut du fichier) par ta clé, entre guillemets

## Étapes pour le mettre en ligne (identiques aux précédents projets)

1. [github.com](https://github.com) → connecte-toi
2. **+** → **New repository** → nomme-le par exemple `apex-gym` → **Create repository** (ne coche rien)
3. **uploading an existing file**
4. Ouvre ce dossier sur ton ordinateur, sélectionne tout son contenu (Ctrl+A / Cmd+A), glisse-le dans la zone GitHub — y compris le dossier `app` tel quel
5. **Commit changes**
6. [vercel.com](https://vercel.com) → **Continue with GitHub**
7. **Add New** → **Project** → sélectionne le repo → **Import** → **Deploy**

## Rappel important

Désactive la traduction automatique de ton navigateur avant de toucher à GitHub (icône dans la barre d'adresse → "Afficher la page d'origine"), sinon le contenu des fichiers peut être abîmé pendant l'envoi.

Si le build échoue sur Vercel, copie-colle le log complet — vérifie en particulier que `layout.js` et `globals.css` n'ont pas leur contenu inversé, erreur la plus fréquente rencontrée jusqu'ici.

## Vidéo du hero

La vidéo de fond utilisée vient de Mixkit, sous licence **usage personnel uniquement** — parfaite pour une démo, mais à remplacer par une vraie vidéo (ou une licence commerciale) avant toute mise en ligne réelle pour un client.

## Aller plus loin

- La réservation actuelle envoie une demande par email (pas de vraie gestion de disponibilités en temps réel) — pour ça, il faudrait connecter un vrai outil comme Mindbody, Resamania ou Eversport, pensés pour les salles de sport.
- Les photos des coachs et de la galerie viennent d'Unsplash, à remplacer par de vraies photos pour un client réel.
