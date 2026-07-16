export const metadata = {
  title: "Politique de confidentialité — APEX Gym",
  description: "Politique de confidentialité et protection des données du site APEX Gym.",
};

export default function PolitiqueConfidentialite() {
  return (
    <div style={{ background: "#f2f2f0", color: "#0a0a0a", minHeight: "100vh" }} className="px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-sm underline" style={{ color: "#e10600" }}>&larr; Retour à l&apos;accueil</a>
        <h1 className="text-4xl font-bold mt-6 mb-10 uppercase">Politique de confidentialité</h1>

        <div className="space-y-8 text-sm leading-relaxed" style={{ color: "rgba(10,10,10,0.75)" }}>
          <section>
            <h2 className="text-lg font-semibold mb-2" style={{ color: "#0a0a0a" }}>Données collectées</h2>
            <p>Lorsque vous utilisez les formulaires de contact ou de réservation de ce site, nous collectons : votre nom, votre adresse email, et selon le formulaire, votre choix de cours, la date et l&apos;horaire souhaités.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2" style={{ color: "#0a0a0a" }}>Finalité du traitement</h2>
            <p>Ces données sont utilisées uniquement pour répondre à votre demande (confirmation de réservation, réponse à votre message) et ne sont ni vendues ni partagées avec des tiers à des fins commerciales.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2" style={{ color: "#0a0a0a" }}>Durée de conservation</h2>
            <p>Les données transmises via les formulaires sont conservées le temps nécessaire au traitement de votre demande, puis supprimées.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2" style={{ color: "#0a0a0a" }}>Vos droits</h2>
            <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles. Pour exercer ce droit, contactez-nous à contact@apexgym.fr.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2" style={{ color: "#0a0a0a" }}>Cookies</h2>
            <p>Ce site n&apos;utilise pas de cookies de suivi publicitaire. Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être utilisés.</p>
          </section>

          <p className="text-xs italic pt-6" style={{ color: "rgba(10,10,10,0.45)" }}>
            Ceci est un site de démonstration. Cette politique est fournie à titre d&apos;exemple et devrait être adaptée par un professionnel avant toute mise en ligne commerciale réelle.
          </p>
        </div>
      </div>
    </div>
  );
}
