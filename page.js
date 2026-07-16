"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import {
  Dumbbell,
  Flame,
  HeartPulse,
  PersonStanding,
  Swords,
  Sparkles,
  Check,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Menu,
  X,
} from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "COLLE_TA_CLE_ICI";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function Reveal({ children, className, delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString("fr-FR")}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 2500, suffix: "+", label: "Adhérents" },
  { value: 98, suffix: "%", label: "Satisfaction" },
  { value: 12, suffix: "", label: "Coachs certifiés" },
  { value: 7, suffix: "j/7", label: "Ouvert" },
];

const plans = [
  {
    name: "Mensuel",
    price: "49€",
    period: "/mois",
    tag: null,
    features: ["Accès illimité 7j/7", "Tous les cours collectifs", "Espace musculation & cardio", "Sans engagement"],
  },
  {
    name: "Trimestriel",
    price: "129€",
    period: "/trim.",
    tag: "Populaire",
    features: ["Accès illimité 7j/7", "Tous les cours collectifs", "Espace musculation & cardio", "1 bilan coaching offert", "Accès vestiaires premium"],
  },
  {
    name: "Annuel",
    price: "399€",
    period: "/an",
    tag: "Meilleur prix",
    features: ["Accès illimité 7j/7", "Tous les cours collectifs", "Espace musculation & cardio", "4 bilans coaching offerts", "Accès vestiaires premium", "Invité gratuit x2/mois"],
  },
];

const classes = [
  {
    name: "Cross Training",
    icon: Flame,
    sessions: [
      { day: "Lun / Mer / Ven", time: "7h00 – 8h00", coach: "Yanis", duree: "60 min", niveau: "Tous niveaux" },
      { day: "Mar / Jeu", time: "18h30 – 19h30", coach: "Sofia", duree: "60 min", niveau: "Intermédiaire" },
    ],
  },
  {
    name: "Musculation",
    icon: Dumbbell,
    sessions: [
      { day: "Tous les jours", time: "6h00 – 22h00", coach: "Libre-service", duree: "Libre", niveau: "Tous niveaux" },
      { day: "Mar / Jeu", time: "19h00 – 20h00", coach: "Marc", duree: "60 min", niveau: "Avancé" },
    ],
  },
  {
    name: "Cardio",
    icon: HeartPulse,
    sessions: [
      { day: "Lun / Mer / Ven", time: "12h30 – 13h15", coach: "Léa", duree: "45 min", niveau: "Tous niveaux" },
      { day: "Sam", time: "10h00 – 11h00", coach: "Yanis", duree: "60 min", niveau: "Intermédiaire" },
    ],
  },
  {
    name: "Yoga",
    icon: PersonStanding,
    sessions: [
      { day: "Mar / Jeu", time: "8h00 – 9h00", coach: "Inès", duree: "60 min", niveau: "Débutant" },
      { day: "Dim", time: "9h30 – 10h30", coach: "Inès", duree: "60 min", niveau: "Tous niveaux" },
    ],
  },
  {
    name: "Boxing",
    icon: Swords,
    sessions: [
      { day: "Lun / Mer", time: "19h30 – 20h30", coach: "Karim", duree: "60 min", niveau: "Intermédiaire" },
      { day: "Sam", time: "11h00 – 12h00", coach: "Karim", duree: "60 min", niveau: "Avancé" },
    ],
  },
  {
    name: "Pilates",
    icon: Sparkles,
    sessions: [
      { day: "Mar / Jeu", time: "9h15 – 10h00", coach: "Léa", duree: "45 min", niveau: "Débutant" },
      { day: "Ven", time: "17h30 – 18h15", coach: "Inès", duree: "45 min", niveau: "Tous niveaux" },
    ],
  },
];

const coachs = [
  { name: "Yanis Belhadj", spec: "Cross Training & Cardio", bio: "Ex-athlète de CrossFit, 8 ans d'expérience en coaching collectif.", img: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&q=80" },
  { name: "Sofia Marchetti", spec: "Cross Training", bio: "Spécialiste préparation physique, passionnée de mouvements fonctionnels.", img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=500&q=80" },
  { name: "Marc Dubreuil", spec: "Musculation", bio: "Coach musculation depuis 12 ans, expert en prise de masse et force.", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80" },
  { name: "Léa Fontaine", spec: "Cardio & Pilates", bio: "Ancienne danseuse, spécialiste du renforcement postural.", img: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=500&q=80" },
  { name: "Inès Rahmani", spec: "Yoga & Pilates", bio: "Professeure certifiée, 10 ans de pratique du yoga vinyasa.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&q=80" },
  { name: "Karim Tazi", spec: "Boxing", bio: "Ancien boxeur amateur, coach boxe éducative depuis 6 ans.", img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=500&q=80" },
];

const gallery = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&q=80",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=700&q=80",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=700&q=80",
  "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=700&q=80",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=700&q=80",
  "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=700&q=80",
];

const avis = [
  { name: "Camille R.", text: "Ambiance incroyable, coachs à l'écoute. J'ai vu des résultats en 2 mois que je n'avais jamais eus ailleurs.", note: 5 },
  { name: "Thomas L.", text: "Le meilleur rapport qualité-prix de Paris. Les cours de cross training sont intenses mais super encadrés.", note: 5 },
  { name: "Sarah B.", text: "Locaux magnifiques, toujours propres, jamais bondé aux heures de pointe. Je recommande à 100%.", note: 5 },
];

const faqs = [
  { q: "Puis-je essayer avant de m'engager ?", a: "Oui, un essai gratuit d'une séance est offert à tout nouvel adhérent, sans engagement." },
  { q: "Y a-t-il un engagement de durée ?", a: "L'abonnement mensuel est sans engagement. Les formules trimestrielle et annuelle sont plus avantageuses mais engagées sur la durée choisie." },
  { q: "Les cours collectifs sont-ils inclus ?", a: "Oui, tous les cours collectifs (cross training, yoga, boxing, pilates...) sont inclus dans chaque formule." },
  { q: "Puis-je suspendre mon abonnement ?", a: "Oui, une suspension pour raison médicale ou voyage est possible sur simple demande à l'accueil." },
  { q: "La salle est-elle ouverte les jours fériés ?", a: "Oui, APEX Gym est ouvert 7j/7 toute l'année, y compris les jours fériés, avec des horaires aménagés." },
];

const trustLogos = ["FitMag", "Sport Hebdo", "Le Guide Fitness", "Paris Sport News", "Muscu&Co"];

const engagements = [
  { title: "Essai gratuit", desc: "Une séance offerte avant de vous engager, sans carte bancaire." },
  { title: "Sans engagement", desc: "La formule mensuelle se résilie à tout moment, sans frais cachés." },
  { title: "Satisfaction garantie", desc: "Remboursé sous 30 jours si la salle ne vous convient pas." },
  { title: "Hygiène irréprochable", desc: "Nettoyage du matériel toutes les 2 heures, produits mis à disposition." },
];

const sectionIds = ["presentation", "abonnements", "planning", "reservation", "coachs", "contact"];

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedClass, setSelectedClass] = useState(classes[0].name);
  const [bookingStatus, setBookingStatus] = useState("idle");
  const [contactStatus, setContactStatus] = useState("idle");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const h = document.documentElement;
      const progress = (window.scrollY / (h.scrollHeight - h.clientHeight)) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  async function submitForm(e, subject, setStatus) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("subject", subject);
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  const timeSlots = ["7h00", "9h00", "12h30", "18h00", "19h30"];

  return (
    <div className="relative overflow-x-hidden pb-16 md:pb-0" style={{ background: "var(--black)" }}>
      {/* SCROLL PROGRESS BAR */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px]" style={{ background: "transparent" }}>
        <div className="h-full" style={{ width: `${scrollProgress}%`, background: "var(--red)", transition: "width 0.1s linear" }} />
      </div>

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-blur" : ""}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <a href="#" className="disp text-2xl tracking-wide text-white">
            APEX<span style={{ color: "var(--red)" }}>.</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: "var(--text-dim-dark)" }}>
            {[
              ["presentation", "Salle"],
              ["abonnements", "Abonnements"],
              ["planning", "Planning"],
              ["reservation", "Réserver"],
              ["coachs", "Coachs"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="transition-colors"
                style={{ color: activeSection === id ? "var(--red)" : "var(--text-dim-dark)" }}
              >
                {label}
              </a>
            ))}
          </div>
          <a href="#reservation" className="hidden md:inline-flex btn-primary text-sm px-6 py-2.5 font-semibold">Essai gratuit</a>
          <button onClick={() => setNavOpen(!navOpen)} className="md:hidden text-white">
            {navOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
        {navOpen && (
          <div className="md:hidden flex flex-col gap-5 px-6 pb-8 text-sm" style={{ background: "var(--black)", color: "var(--text-dim-dark)" }}>
            <a href="#presentation" onClick={() => setNavOpen(false)}>Salle</a>
            <a href="#abonnements" onClick={() => setNavOpen(false)}>Abonnements</a>
            <a href="#planning" onClick={() => setNavOpen(false)}>Planning</a>
            <a href="#reservation" onClick={() => setNavOpen(false)}>Réserver</a>
            <a href="#coachs" onClick={() => setNavOpen(false)}>Coachs</a>
            <a href="#contact" onClick={() => setNavOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end">
        <video autoPlay muted loop playsInline poster="https://assets.mixkit.co/videos/14661/14661-thumb-720-0.jpg" className="absolute inset-0 w-full h-full object-cover">
          <source src="https://assets.mixkit.co/videos/14661/14661-720.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--black) 8%, rgba(10,10,10,0.55) 50%, rgba(10,10,10,0.35))" }} />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pb-24 pt-40 w-full">
          <Reveal>
            <p className="label mb-6">Salle de sport premium — Paris</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="h1 text-[15vw] md:text-[7.5vw] text-white mb-8">
              Dépasse<br /><span style={{ color: "var(--red)" }}>tes limites.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-lg mb-10 text-base" style={{ color: "var(--text-dim-dark)" }}>
              Cross training, musculation, boxing, yoga — un espace pensé pour ceux qui veulent des résultats, pas des excuses.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <a href="#reservation" className="btn-primary px-8 py-4 font-semibold text-sm">Commencer maintenant</a>
              <a href="#abonnements" className="btn-outline-dark px-8 py-4 font-semibold text-sm">Essai gratuit</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="py-8 border-y" style={{ borderColor: "var(--line-dark)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-center text-xs uppercase tracking-widest mb-5" style={{ color: "var(--text-muted-dark)" }}>Vu dans</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {trustLogos.map((logo) => (
              <span key={logo} className="disp text-lg uppercase" style={{ color: "var(--text-muted-dark)" }}>{logo}</span>
            ))}
          </div>
        </div>
      </div>

      {/* STATS */}
      <section className="py-16" style={{ background: "var(--red)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <p className="disp text-4xl md:text-5xl text-white"><Counter value={s.value} suffix={s.suffix} /></p>
              <p className="text-xs uppercase tracking-widest mt-2 text-white/80">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRESENTATION */}
      <section id="presentation" className="py-24 md:py-32" style={{ background: "var(--off-white)", color: "var(--black)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&q=80" className="w-full aspect-[4/5] object-cover" alt="Intérieur de la salle APEX Gym" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="label mb-5">La salle</p>
            <h2 className="h2 text-4xl md:text-5xl mb-6">1200m² pensés pour la performance.</h2>
            <p className="leading-relaxed mb-5" style={{ color: "var(--text-dim-light)" }}>
              APEX Gym réunit un plateau de musculation dernière génération, trois studios de cours collectifs, un ring de boxe et un espace bien-être — le tout dans un cadre premium pensé jusqu'au moindre détail.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--text-dim-light)" }}>
              Douze coachs certifiés, du matériel Technogym et Rogue, et une équipe présente sur place 7j/7 pour vous accompagner.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="py-16" style={{ background: "var(--off-white)", color: "var(--black)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-4 gap-8">
          {engagements.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.06}>
              <div className="flex items-start gap-3">
                <Check size={20} style={{ color: "var(--red)" }} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">{e.title}</p>
                  <p className="text-sm" style={{ color: "var(--text-dim-light)" }}>{e.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABONNEMENTS */}
      <section id="abonnements" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <p className="label mb-5">Abonnements</p>
            <h2 className="h2 text-4xl md:text-5xl mb-14 max-w-2xl text-white">Une formule pour chaque ambition.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <div className="card-dark p-8 h-full flex flex-col" style={p.tag === "Populaire" ? { borderColor: "var(--red)" } : {}}>
                  {p.tag && (
                    <p className="label mb-4" style={{ color: p.tag === "Populaire" ? "var(--red)" : "#fff" }}>{p.tag}</p>
                  )}
                  <p className="disp text-2xl text-white uppercase mb-2">{p.name}</p>
                  <p className="mb-6"><span className="disp text-4xl text-white">{p.price}</span><span style={{ color: "var(--text-muted-dark)" }}>{p.period}</span></p>
                  <div className="space-y-3 mb-8 flex-1">
                    {p.features.map((f) => (
                      <div key={f} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-dim-dark)" }}>
                        <Check size={16} style={{ color: "var(--red)" }} className="mt-0.5 flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#reservation" className="btn-primary text-center py-3 font-semibold text-sm">Choisir cette formule</a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PLANNING */}
      <section id="planning" className="py-24 md:py-32" style={{ background: "var(--off-white)", color: "var(--black)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <p className="label mb-5">Planning des cours</p>
            <h2 className="h2 text-4xl md:text-5xl mb-14 max-w-2xl">Six disciplines, un seul objectif.</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {classes.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.name} delay={(i % 2) * 0.08}>
                  <div className="card-light p-7">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-11 h-11 flex items-center justify-center rounded-full" style={{ background: "var(--red)" }}>
                        <Icon size={20} color="#fff" />
                      </div>
                      <p className="disp text-xl uppercase">{c.name}</p>
                    </div>
                    <div className="space-y-3">
                      {c.sessions.map((s, idx) => (
                        <div key={idx} className="flex justify-between items-center text-sm py-2 border-t" style={{ borderColor: "var(--line-light)" }}>
                          <div>
                            <p className="font-medium">{s.day}</p>
                            <p style={{ color: "var(--text-muted-light)" }}>{s.time}</p>
                          </div>
                          <div className="text-right">
                            <p>{s.coach}</p>
                            <p style={{ color: "var(--text-muted-light)" }}>{s.duree} · {s.niveau}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESERVATION */}
      <section id="reservation" className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <Reveal>
            <p className="label mb-5">Réservation</p>
            <h2 className="h2 text-4xl md:text-5xl mb-14 text-white">Réservez votre créneau.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-dark p-8">
              {bookingStatus === "success" ? (
                <p className="text-center py-8" style={{ color: "var(--red)" }}>
                  Réservation envoyée ! Nous confirmons votre place sous peu par email.
                </p>
              ) : (
                <form onSubmit={(e) => submitForm(e, "Nouvelle réservation de cours — APEX Gym", setBookingStatus)} className="space-y-6">
                  <div>
                    <p className="text-sm mb-3 text-white font-medium">Choisissez un cours</p>
                    <div className="flex flex-wrap gap-2">
                      {classes.map((c) => (
                        <button
                          type="button"
                          key={c.name}
                          onClick={() => setSelectedClass(c.name)}
                          className={`px-4 py-2 text-sm rounded-full transition-colors ${selectedClass === c.name ? "pill-active" : "pill-inactive"}`}
                        >
                          {c.name}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="cours" value={selectedClass} />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm mb-2 text-white font-medium">Date souhaitée</p>
                      <input required type="date" name="date" className="w-full px-4 py-3 text-sm rounded" style={{ background: "var(--black)", border: "1px solid var(--line-dark)", color: "#fff" }} />
                    </div>
                    <div>
                      <p className="text-sm mb-2 text-white font-medium">Horaire souhaité</p>
                      <select required name="heure" className="w-full px-4 py-3 text-sm rounded" style={{ background: "var(--black)", border: "1px solid var(--line-dark)", color: "#fff" }}>
                        <option value="">Choisir un horaire</option>
                        {timeSlots.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <input required type="text" name="name" placeholder="Votre nom" className="px-4 py-3 text-sm rounded" style={{ background: "var(--black)", border: "1px solid var(--line-dark)", color: "#fff" }} />
                    <input required type="email" name="email" placeholder="Votre email" className="px-4 py-3 text-sm rounded" style={{ background: "var(--black)", border: "1px solid var(--line-dark)", color: "#fff" }} />
                  </div>

                  <button disabled={bookingStatus === "sending"} className="btn-primary w-full py-4 font-semibold text-sm">
                    {bookingStatus === "sending" ? "Envoi en cours..." : "Réserver ma place"}
                  </button>
                  {bookingStatus === "error" && (
                    <p className="text-sm text-center" style={{ color: "var(--red-light)" }}>Une erreur est survenue, réessayez dans un instant.</p>
                  )}
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* COACHS */}
      <section id="coachs" className="py-24 md:py-32" style={{ background: "var(--off-white)", color: "var(--black)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <p className="label mb-5">Nos coachs</p>
            <h2 className="h2 text-4xl md:text-5xl mb-14 max-w-2xl">Douze experts, une même exigence.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {coachs.map((c, i) => (
              <Reveal key={c.name} delay={(i % 3) * 0.08}>
                <div className="card-light overflow-hidden">
                  <img src={c.img} className="w-full aspect-[4/5] object-cover" alt={c.name} />
                  <div className="p-6">
                    <p className="disp text-lg uppercase">{c.name}</p>
                    <p className="label mb-3" style={{ fontSize: 11 }}>{c.spec}</p>
                    <p className="text-sm" style={{ color: "var(--text-dim-light)" }}>{c.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <p className="label mb-5">Galerie</p>
            <h2 className="h2 text-4xl md:text-5xl mb-14 max-w-2xl text-white">L&apos;énergie APEX, en images.</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((src, i) => (
              <Reveal key={src} delay={(i % 3) * 0.06}>
                <img src={src} className="w-full aspect-square object-cover" alt="Galerie APEX Gym" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AVIS */}
      <section className="py-24 md:py-32" style={{ background: "var(--off-white)", color: "var(--black)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <p className="label mb-5">Avis clients</p>
            <h2 className="h2 text-4xl md:text-5xl mb-14 max-w-2xl">Ils en parlent mieux que nous.</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {avis.map((a, i) => (
              <Reveal key={a.name} delay={i * 0.08}>
                <div className="card-light p-7">
                  <p className="mb-4" style={{ color: "var(--red)" }}>{"★".repeat(a.note)}</p>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-dim-light)" }}>&quot;{a.text}&quot;</p>
                  <p className="text-sm font-medium">{a.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <Reveal>
            <p className="label mb-5">FAQ</p>
            <h2 className="h2 text-4xl md:text-5xl mb-14 text-white">Des questions ?</h2>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className="card-dark p-6 cursor-pointer" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div className="flex justify-between items-center gap-4">
                    <p className="text-white font-medium">{f.q}</p>
                    <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.25 }}>
                      <ChevronDown size={20} color="#fff" />
                    </motion.div>
                  </div>
                  {openFaq === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.25 }}
                      className="text-sm mt-4"
                      style={{ color: "var(--text-dim-dark)" }}
                    >
                      {f.a}
                    </motion.p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-32" style={{ background: "var(--off-white)", color: "var(--black)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12">
          <Reveal>
            <p className="label mb-5">Contact</p>
            <h2 className="h2 text-4xl md:text-5xl mb-8">Une question ? Écrivez-nous.</h2>
            {contactStatus === "success" ? (
              <p style={{ color: "var(--red)" }}>Merci, votre message a bien été envoyé !</p>
            ) : (
              <form onSubmit={(e) => submitForm(e, "Nouveau message de contact — APEX Gym", setContactStatus)} className="space-y-4">
                <input required type="text" name="name" placeholder="Votre nom" className="w-full px-4 py-3 text-sm" style={{ background: "#fff", border: "1px solid var(--line-light)" }} />
                <input required type="email" name="email" placeholder="Votre email" className="w-full px-4 py-3 text-sm" style={{ background: "#fff", border: "1px solid var(--line-light)" }} />
                <textarea name="message" placeholder="Votre message" rows="4" className="w-full px-4 py-3 text-sm" style={{ background: "#fff", border: "1px solid var(--line-light)" }} />
                <button disabled={contactStatus === "sending"} className="btn-primary px-8 py-3 font-semibold text-sm">
                  {contactStatus === "sending" ? "Envoi..." : "Envoyer"}
                </button>
                {contactStatus === "error" && <p className="text-sm" style={{ color: "var(--red)" }}>Erreur, réessayez.</p>}
              </form>
            )}

            <div className="mt-10 space-y-3 text-sm" style={{ color: "var(--text-dim-light)" }}>
              <div className="flex items-center gap-3"><Phone size={16} /><span>01 40 00 00 00</span></div>
              <div className="flex items-center gap-3"><Mail size={16} /><span>contact@apexgym.fr</span></div>
              <div className="flex items-center gap-3"><MapPin size={16} /><span>25 avenue des Champions, 75012 Paris</span></div>
              <div className="flex items-center gap-3"><Clock size={16} /><span>Lun–Ven 6h–23h · Sam–Dim 8h–21h</span></div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <iframe
              title="Localisation APEX Gym"
              src="https://www.google.com/maps?q=Paris,France&output=embed"
              className="w-full h-full min-h-[380px] border-0"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* MOBILE STICKY CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex" style={{ background: "var(--black)", borderTop: "1px solid var(--line-dark)" }}>
        <a href="tel:0140000000" className="flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium text-white">
          <Phone size={16} /> Appeler
        </a>
        <a href="#reservation" className="flex-1 flex items-center justify-center py-4 text-sm font-semibold" style={{ background: "var(--red)", color: "#fff" }}>
          Réserver
        </a>
      </div>

      {/* FOOTER */}
      <footer className="py-14 border-t" style={{ borderColor: "var(--line-dark)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
            <div>
              <p className="disp text-2xl text-white mb-3">APEX<span style={{ color: "var(--red)" }}>.</span></p>
              <p className="text-sm max-w-xs" style={{ color: "var(--text-muted-dark)" }}>Salle de sport premium à Paris. Cross training, musculation, boxing, yoga.</p>
            </div>
            <div className="flex gap-16">
              <div>
                <p className="text-xs uppercase tracking-widest mb-3 text-white">Navigation</p>
                <div className="flex flex-col gap-2 text-sm" style={{ color: "var(--text-muted-dark)" }}>
                  <a href="#abonnements">Abonnements</a>
                  <a href="#planning">Planning</a>
                  <a href="#coachs">Coachs</a>
                  <a href="#contact">Contact</a>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest mb-3 text-white">Légal</p>
                <div className="flex flex-col gap-2 text-sm" style={{ color: "var(--text-muted-dark)" }}>
                  <a href="/mentions-legales">Mentions légales</a>
                  <a href="/politique-de-confidentialite">Politique de confidentialité</a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t text-sm" style={{ borderColor: "var(--line-dark)", color: "var(--text-muted-dark)" }}>
            <p>© 2026 APEX Gym. Tous droits réservés.</p>
            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors"><Instagram size={16} /> @apexgym</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
