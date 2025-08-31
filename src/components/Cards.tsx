import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import SchoolIcon from "@mui/icons-material/School";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import type { OverridableComponent } from "@mui/material/OverridableComponent";
import type { SvgIconTypeMap } from "@mui/material";

type Item = {
  title: string;
  description: string;
  image: string;
  icon?: OverridableComponent<SvgIconTypeMap>;
};

const items: Item[] = [
  {
    title: "Partage & Pédagogie",
    description:
      "Journées portes ouvertes, chantiers participatifs, interventions scolaires",
    image: "/images/enfant-ramasse-cerises.jpg",
    icon: SchoolIcon,
  },
  {
    title: "Plantations & Taille",
    description:
      "Ateliers saisonniers pour planter, tailler, et entretenir les arbres fruitiers",
    image: "/images/six-pers-plantent-arbres.jpg",
    icon: LocalFloristIcon,
  },
  {
    title: "Récolte",
    description:
      "Nous récoltons ce que donne le verger, et partageons ces moments et denrées",
    image: "/images/cerises-dans-panier.jpg",
    icon: ShoppingBasketIcon,
  },
  {
    title: "Biodiversité",
    description:
      "Haies champêtres, paillage vivant, tonte raisonnée, zéro pesticide de synthèse, promotion de pratiques biologiques",
    image: "/images/jeune-cerisier.jpg",
    icon: EmojiNatureIcon,
  },
];

export default function Cards() {
  return (
    <Box
      id="actions"
      sx={{
        py: { xs: 6, md: 10 },
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{ textAlign: "center", width: "100%" }}
      >
        Nos actions
      </Typography>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.title}>
            <Card
              elevation={0}
              sx={{ border: "1px solid rgba(0,0,0,0.06)", height: "100%" }}
            >
              <CardContent>
                <CardMedia
                  component="img"
                  src={item.image}
                  alt={item.description}
                  sx={{ borderRadius: 2, height: "auto", objectFit: "cover" }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    mt: 2,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    {item.icon && <item.icon />}
                    <Typography variant="h5">{item.title}</Typography>
                  </Box>

                  <Typography variant="body2">{item.description}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
