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
  { name: "Yanis Belhadj", spec: "Cross Training & Cardio", bio: "Ex-athlète de CrossFit, 8 ans d'expérience en coaching collectif.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80" },
  { name: "Sofia Marchetti", spec: "Cross Training", bio: "Spécialiste préparation physique, passionnée de mouvements fonctionnels.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80" },
  { name: "Marc Dubreuil", spec: "Musculation", bio: "Coach musculation depuis 12 ans, expert en prise de masse et force.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80" },
  { name: "Léa Fontaine", spec: "Cardio & Pilates", bio: "Ancienne danseuse, spécialiste du renforcement postural.", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&q=80" },
  { name: "Inès Rahmani", spec: "Yoga & Pilates", bio: "Professeure certifiée, 10 ans de pratique du yoga vinyasa.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80" },
  { name: "Karim Tazi", spec: "Boxing", bio: "Ancien boxeur amateur, coach boxe éducative depuis 6 ans.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=80" },
];

const gallery = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&q=80",
  "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=700&q=80",
