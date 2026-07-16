export const metadata = {
  title: "Mentions légales — APEX Gym",
  description: "Mentions légales du site APEX Gym.",
};

export default function MentionsLegales() {
  return (
    <div style={{ background: "#f2f2f0", color: "#0a0a0a", minHeight: "100vh" }} className="px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-sm underline" style={{ color: "#e10600" }}>&larr; Retour à l&apos;accueil</a>
        <h1 className="text-4xl font-bold mt-6 mb-10 uppercase" style={{ fontFamily: "sans-serif" }}>Mentions légales</h1>

        <div className="space-y-8 text-sm leading-relaxed" style={{ color: "rgba(10,10,10,0.75)" }}>
          <section>
            <h2 className="text-lg font-semibold mb-2" style={{ color: "#0a0a0a" }}>Éditeur du site</h2>
            <p>APEX Gym SAS — Société fictive à des fins de démonstration.<br />
            Siège social : 25 avenue des Champions, 75012 Paris, France.<br />
            Capital social : 10 000 €.<br />
            RCS Paris : 000 000 000 (numéro fictif).<br />
            Numéro de TVA intracommunautaire : FR00 000000000 (fictif).</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2" style={{ color: "#0a0a0a" }}>Directeur de la publication</h2>
            <p>Le représentant légal d&apos;APEX Gym SAS.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2" style={{ color: "#0a0a0a" }}>Hébergement</h2>
            <p>Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2" style={{ color: "#0a0a0a" }}>Propriété intellectuelle</h2>
            <p>L&apos;ensemble des contenus présents sur ce site (textes, images, logo) sont la propriété d&apos;APEX Gym SAS, sauf mention contraire, et ne peuvent être reproduits sans autorisation.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2" style={{ color: "#0a0a0a" }}>Contact</h2>
            <p>Pour toute question relative à ces mentions légales : contact@apexgym.fr</p>
          </section>

          <p className="text-xs italic pt-6" style={{ color: "rgba(10,10,10,0.45)" }}>
            Ceci est un site de démonstration. Toutes les informations ci-dessus sont fictives et ne correspondent à aucune entreprise réelle.
          </p>
        </div>
      </div>
    </div>
  );
}
