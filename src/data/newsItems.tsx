import ForumIcon from "@mui/icons-material/Forum";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import type React from "react";

export type NewsItem = {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
};

export const newsItems: NewsItem[] = [
  {
    title: "Forum des associations 2025",
    description:
      "Retrouvez-nous au forum des associations le samedi 6 septembre 2025 de 10h à 17h au gymnase municipal. Venez découvrir nos actions, rencontrer les membres de l'association, et discuter de nos projets pour l'année à venir.",
    image: "/images/forum-associations-2025.webp",
    icon: <ForumIcon />,
  },
  {
    title: "De nouveaux arbres !",
    description:
      "Nous allons lancer un nouveau chantier de plantations d'arbres fruitiers au printemps 2025. Rejoignez-nous pour planter des pommiers, poiriers, cerisiers et autres variétés adaptées à notre région. Aucune expérience nécessaire, juste l'envie de contribuer à un verger collectif et durable. Nous en sommes à l'étape du choix des arbres, donnez nous votre avis !",
    image: "/images/pommier.webp",
    icon: <EmojiNatureIcon />,
  },
];
