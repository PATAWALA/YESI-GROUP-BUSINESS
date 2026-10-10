import {
  Search,
  ShieldCheck,
  Handshake,
  Ship,
  Building2,
  Clock,
  Factory,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  CONFIG GLOBALE                                                     */
/* ------------------------------------------------------------------ */

export const siteConfig = {
  name: "YESI GROUP BUSINESS",
  shortName: "YESI GROUP",
  legal: "YESI GROUP BUSINESS Co., Ltd.",
  tagline: "Votre partenaire direct en Chine",
  baseline:
    "Sourcing, contrôle qualité et exportation sécurisés depuis la Chine vers l’Afrique, l’Europe et le monde.",

  /* ⚠️ REMPLACE par ton vrai numéro (format international SANS + ni espaces) */
  whatsappNumber: "8613800000000",
  whatsappDisplay: "+86 138 0000 0000",

  email: "contact@yesigroupbusiness.com",
  phoneDisplay: "+86 138 0000 0000",

  whatsappDefaultMessage:
    "Bonjour YESI GROUP BUSINESS 👋, je souhaite obtenir des informations sur vos services de sourcing et d’exportation depuis la Chine.",

  socials: {
    linkedin: "https://www.linkedin.com",
    facebook: "https://www.facebook.com",
    instagram: "https://www.instagram.com",
  },
} as const;

/* Helper : génère un lien WhatsApp avec message pré-rempli */
export const whatsappLink = (message?: string) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message ?? siteConfig.whatsappDefaultMessage
  )}`;

/* ------------------------------------------------------------------ */
/*  NAVIGATION                                                         */
/* ------------------------------------------------------------------ */

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Sourcing", href: "#sourcing" },
  { label: "Pourquoi nous", href: "#pourquoi-nous" },
  { label: "Contact", href: "#contact" },
];

/* ------------------------------------------------------------------ */
/*  HERO                                                               */
/* ------------------------------------------------------------------ */

export const heroContent = {
  eyebrow: "Intermédiation d’affaires • Sourcing • Export Chine",
  titleLine1: "Votre partenaire direct en Chine",
  titleLine2: "pour vos sourcings et importations sécurisés",
  subtitle:
    "Nous identifions, auditons et négocions auprès des usines chinoises pour vous. Contrôle qualité sur place, groupage et expédition internationale : vous achetez sans risque, au meilleur prix.",
  ctaPrimary: "Lancer ma demande de sourcing",
  ctaSecondary: "Parler à un agent maintenant",
  image:
    "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1600&q=80",
  imageAlt: "Port à conteneurs en Chine",
} as const;

export type TrustBadge = { icon: LucideIcon; title: string; subtitle: string };

export const trustBadges: TrustBadge[] = [
  {
    icon: Building2,
    title: "Présence physique en Chine",
    subtitle: "Bureaux à Guangzhou, Yiwu & Shenzhen",
  },
  {
    icon: Factory,
    title: "Inspection usine sur place",
    subtitle: "Audit & contrôle avant paiement",
  },
  {
    icon: ShieldCheck,
    title: "Zéro arnaque",
    subtitle: "Fournisseurs vérifiés & contrats encadrés",
  },
];

export const heroMarquee: string[] = [
  "Guangzhou",
  "Yiwu",
  "Shenzhen",
  "Ningbo",
  "Foshan",
  "Dongguan",
  "Shanghai",
  "Qingdao",
];

/* ------------------------------------------------------------------ */
/*  SERVICES                                                           */
/* ------------------------------------------------------------------ */

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
  image: string;
};

export const services: Service[] = [
  {
    id: "sourcing",
    icon: Search,
    title: "Sourcing & Recherche de fournisseurs",
    description:
      "Nous identifions les usines réellement capables de produire votre article, au meilleur rapport qualité/prix du marché chinois.",
    bullets: [
      "Analyse de votre cahier des charges",
      "Shortlist de 3 à 5 usines qualifiées",
      "Comparatif prix, MOQ et délais",
      "Échantillons envoyés chez vous",
    ],
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "qualite",
    icon: ShieldCheck,
    title: "Contrôle Qualité & Inspection sur place",
    description:
      "Nos inspecteurs se déplacent en usine pour vérifier la conformité de votre marchandise avant tout paiement du solde.",
    bullets: [
      "Inspection en cours & avant expédition",
      "Rapport photo/vidéo détaillé",
      "Vérification des quantités et specs",
      "Blocage des lots non conformes",
    ],
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "negociation",
    icon: Handshake,
    title: "Négociation & Achats d’échantillons",
    description:
      "Nous négocions en mandarin, directement avec le patron d’usine, et gérons les commandes d’échantillons comme les gros volumes.",
    bullets: [
      "Négociation prix, MOQ & délais",
      "Rédaction de contrats bilingues",
      "Paiements sécurisés & traçables",
      "Suivi de production hebdomadaire",
    ],
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "expedition",
    icon: Ship,
    title: "Groupage & Expédition internationale",
    description:
      "De l’entrepôt chinois à votre port ou votre entrepôt : nous gérons le fret maritime, aérien et le groupage LCL.",
    bullets: [
      "Fret maritime FCL / LCL & aérien",
      "Consolidation multi-fournisseurs",
      "Dédouanement & documents export",
      "Suivi du conteneur jusqu’à livraison",
    ],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
  },
];

/* ------------------------------------------------------------------ */
/*  SIMULATEUR DE SOURCING                                             */
/* ------------------------------------------------------------------ */

export const simulatorStepLabels = [
  { step: 1, label: "Votre besoin" },
  { step: 2, label: "Volume & budget" },
  { step: 3, label: "Destination & contact" },
] as const;

export const productCategories: string[] = [
  "Électronique & Accessoires",
  "Textile & Habillement",
  "Maison & Décoration",
  "Machines & Équipements",
  "Matériel médical",
  "Cosmétiques & Soins",
  "Pièces auto & Moto",
  "Emballage & Packaging",
  "Mobilier",
  "Autre",
];

export const quantityOptions: string[] = [
  "Échantillon uniquement",
  "Petite série (moins de 500 unités)",
  "Commande moyenne (500 – 5 000 unités)",
  "Conteneur complet 20’",
  "Conteneur complet 40’",
  "Plusieurs conteneurs / récurrent",
];

export const budgetRanges: string[] = [
  "Moins de 1 000 $",
  "1 000 – 5 000 $",
  "5 000 – 20 000 $",
  "20 000 – 50 000 $",
  "Plus de 50 000 $",
  "À définir avec vous",
];

export const destinationCountries: string[] = [
  "Sénégal",
  "Côte d’Ivoire",
  "Cameroun",
  "Gabon",
  "Mali",
  "Burkina Faso",
  "Bénin",
  "Togo",
  "Guinée",
  "Niger",
  "Tchad",
  "RD Congo",
  "Congo-Brazzaville",
  "Maroc",
  "Algérie",
  "Tunisie",
  "France",
  "Belgique",
  "Canada",
  "Autre pays",
];

/* ------------------------------------------------------------------ */
/*  POURQUOI NOUS                                                      */
/* ------------------------------------------------------------------ */

export type Stat = {
  icon: LucideIcon;
  value: string;
  label: string;
  detail: string;
};

export const stats: Stat[] = [
  {
    icon: Building2,
    value: "3",
    label: "Bureaux en Chine",
    detail: "Guangzhou • Yiwu • Shenzhen",
  },
  {
    icon: Clock,
    value: "< 24h",
    label: "Temps de réponse",
    detail: "Devis & shortlist fournisseurs",
  },
  {
    icon: Factory,
    value: "150+",
    label: "Usines vérifiées",
    detail: "Auditées et testées sur le terrain",
  },
  {
    icon: BadgeCheck,
    value: "98%",
    label: "Livraisons conformes",
    detail: "Grâce au contrôle qualité systématique",
  },
];

export type Reason = { icon: LucideIcon; title: string; text: string };

export const reasons: Reason[] = [
  {
    icon: MapPin_,
    title: "Nous sommes sur place, pas derrière un écran",
    text: "Nos équipes se déplacent chaque semaine en usine. Vous ne payez jamais un fournisseur que nous n’avons pas vu.",
  },
  {
    icon: ShieldCheck,
    title: "Votre argent est protégé",
    text: "Contrats bilingues, paiements échelonnés et inspection avant solde : le risque d’arnaque tombe à zéro.",
  },
  {
    icon: Handshake,
    title: "Un interlocuteur unique et francophone",
    text: "Vous parlez à un agent dédié qui pilote la Chine pour vous, dans votre langue et votre fuseau horaire.",
  },
  {
    icon: Ship,
    title: "Un coût total maîtrisé",
    text: "Prix usine négocié + fret + douane : nous vous donnons le coût rendu réel, sans frais cachés.",
  },
];

/* petit alias pour éviter de polluer les imports lucide dans ce fichier */
import { MapPin as MapPin_ } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  CONTACT / FOOTER                                                   */
/* ------------------------------------------------------------------ */

export const offices = [
  {
    city: "Guangzhou",
    role: "Siège opérationnel",
    address: "Zone commerciale, Baiyun District, Guangzhou, Chine",
  },
  {
    city: "Yiwu",
    role: "Bureau marché & groupage",
    address: "Futian Market District, Yiwu, Zhejiang, Chine",
  },
  {
    city: "Shenzhen",
    role: "Bureau électronique & tech",
    address: "Huaqiangbei, Futian District, Shenzhen, Chine",
  },
];

export const footerServices = [
  "Sourcing & fournisseurs",
  "Contrôle qualité",
  "Négociation & achats",
  "Groupage & expédition",
  "Inspection usine",
];

export const footerLinks: NavLink[] = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Simulateur de sourcing", href: "#sourcing" },
  { label: "Pourquoi nous", href: "#pourquoi-nous" },
  { label: "Contact", href: "#contact" },
];