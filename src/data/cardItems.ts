import SchoolIcon from "@mui/icons-material/School";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import type { OverridableComponent } from "@mui/material/OverridableComponent";
import type { SvgIconTypeMap } from "@mui/material";

export type CardItem = {
  title: string;
  description: string;
  image: string;
  icon?: OverridableComponent<SvgIconTypeMap>;
};

export const cardItems: CardItem[] = [
  {
    title: "Partage & Pédagogie",
    description:
      "Journées portes ouvertes, chantiers participatifs, interventions scolaires",
    image: "/images/enfant-ramasse-cerises.webp",
    icon: SchoolIcon,
  },
  {
    title: "Plantations & Taille",
    description:
      "Ateliers saisonniers pour planter, tailler, et entretenir les arbres fruitiers",
    image: "/images/six-pers-plantent-arbres.webp",
    icon: LocalFloristIcon,
  },
  {
    title: "Récolte",
    description:
      "Nous récoltons ce que donne le verger, et partageons ces moments et denrées",
    image: "/images/cerises-dans-panier.webp",
    icon: ShoppingBasketIcon,
  },
  {
    title: "Biodiversité",
    description:
      "Haies champêtres, paillage vivant, tonte raisonnée, zéro pesticide de synthèse, promotion de pratiques biologiques",
    image: "/images/jeune-cerisier.webp",
    icon: EmojiNatureIcon,
  },
];
