import ForumIcon from "@mui/icons-material/Forum";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import CelebrationIcon from "@mui/icons-material/Celebration";
import type React from "react";

export type NewsItem = {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  links?: { href: string; label: string }[];
};

export const newsItems: NewsItem[] = [
  {
    title: "Le verger est inauguré !",
    description:
      "Samedi 2 mai 2026, le Verger des Vérités a été inauguré après deux années de travaux.Une trentaine d'arbres (cerisiers, pommiers, pruniers), issus de la pépinière locale Earl Brerat de Droiturier en circuit court, ont été plantés. Merci à la mairie, à l'huilerie de Lapalisse, au paysagiste Guillaume Quatresous, aux services techniques de la ville et au soutien indéfectible de l'association Les Amis des arbres et de la nature de Vichy.",
    image: "/images/inauguration.webp",
    icon: <CelebrationIcon />,
    links: [
      {
        href: "https://www.lamontagne.fr/lapalisse-03120/actualites/a-lapalisse-le-verger-des-verites-inaugure-apres-deux-ans-de-travaux-et-soutien-de-l-association-les-amis-des-arbres_14982818/",
        label: "Lire l'article de La Montagne",
      },
      {
        href: "https://www.facebook.com/VilleLapalisse/posts/-inauguration-du-verger-des-v%C3%A9rit%C3%A9s-un-grand-moment-de-partage-a-eu-lieu-ce-same/1308805668107751/",
        label: "Voir la publication de la mairie de Lapalisse",
      },
    ],
  },
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
