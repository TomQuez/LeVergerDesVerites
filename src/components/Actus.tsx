import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import type React from "react";
import ForumIcon from "@mui/icons-material/Forum";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";

type NewsItem = {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
};

const newsItems: NewsItem[] = [
  {
    title: "Forum des associations 2025",
    description:
      "Retrouvez-nous au forum des associations le samedi 6 septembre 2025 de 10h à 17h au gymnase municipal. Venez découvrir nos actions, rencontrer les membres de l'association, et discuter de nos projets pour l'année à venir.",
    image: "/images/forum-associations-2025.png",
    icon: <ForumIcon />,
  },
  {
    title: "De nouveaux arbres !",
    description:
      "Nous allons lancer un nouveau chantier de plantations d'arbres fruitiers au printemps 2025. Rejoignez-nous pour planter des pommiers, poiriers, cerisiers et autres variétés adaptées à notre région. Aucune expérience nécessaire, juste l'envie de contribuer à un verger collectif et durable. Nous en sommes à l'étape du choix des arbres, donnez nous votre avis !",
    image: "/images/pommier.jpg",
    icon: <EmojiNatureIcon />,
  },
];

export default function Actus() {
  return (
    <Box id="actus" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ textAlign: "center", width: "100%" }}
      >
        Actus
      </Typography>
      <Grid container justifyContent="center" mb={4}>
        {newsItems.map((item, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.title}>
            <Card
              key={index}
              elevation={0}
              sx={{
                border: "1px solid rgba(0,0,0,0.06)",
                height: "100%",
                m: 2,
              }}
            >
              <CardContent>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{ borderRadius: 2, objectFit: "cover" }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    mt: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    {item.icon}
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
