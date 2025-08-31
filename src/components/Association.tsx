import { Stack, Box, Typography, List, ListItem } from "@mui/material";

export default function Association() {
  return (
    <Box>
      <Stack spacing={2} id="asso">
        <Typography variant="h3" sx={{ textAlign: "center" }}>
          Notre Association
        </Typography>
        <Typography variant="subtitle1" sx={{ textAlign: "center", p: 1 }}>
          Engagée pour la préservation de notre environnement, la promotion
          d'une agriculture durable, de la ruralité, et la préservation du lien
          social dans nos villages.
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center", p: 1 }}>
          Nous croyons en une approche collaborative et participative pour
          impliquer tous les acteurs de notre territoire.
        </Typography>
        <Typography variant="subtitle2" sx={{ textAlign: "left", p: 1, px: 2 }}>
          Le Bureau de l'association :
        </Typography>
        <List sx={{ pl: 2, fontSize: "0.875rem" }}>
          <ListItem>- Président : Stefan Contant</ListItem>
          <ListItem>- Trésorier : Grégorie Chaux</ListItem>
          <ListItem>- Co-Trésorière : Milena Pousset</ListItem>
        </List>
      </Stack>
    </Box>
  );
}
