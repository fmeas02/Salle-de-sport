import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "APEX Gym — Salle de sport premium à Paris",
  description:
    "APEX Gym, salle de sport premium à Paris. Cross training, musculation, cardio, yoga, boxing, pilates. Coachs certifiés, ouvert 7j/7. Réservez votre cours.",
  keywords: [
    "salle de sport Paris",
    "cross training",
    "musculation premium",
    "coach sportif",
    "cours de boxe",
    "salle de sport haut de gamme",
  ],
  openGraph: {
    title: "APEX Gym — Salle de sport premium à Paris",
    description:
      "Cross training, musculation, cardio, yoga, boxing, pilates. Coachs certifiés, ouvert 7j/7.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${anton.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
