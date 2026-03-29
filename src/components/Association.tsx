import { Stack, Box, Typography, List, ListItem } from "@mui/material";
import { useFadeIn } from "../hooks/useFadeIn";
import { ASSO } from "../Constant";

const bureauMembers = [
  { role: "Président", name: ASSO.pres },
  { role: "Trésorier", name: ASSO.Tresorier },
  { role: "Co-Trésorière", name: ASSO.CoTresorier },
];

export default function Association() {
  const { ref, isVisible } = useFadeIn();
  return (
    <Box
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      component="section"
      id="asso"
      sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.paper" }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 3 } }}>
        <Stack spacing={2}>
          <Typography variant="h2" component="h2" sx={{ textAlign: "center" }}>
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
          <Typography
            variant="subtitle2"
            sx={{ textAlign: "left", p: 1, px: 2 }}
          >
            Le Bureau de l'association :
          </Typography>
          <List sx={{ pl: 2, fontSize: "0.875rem" }}>
            {bureauMembers.map((m) => (
              <ListItem key={m.role}>
                - {m.role} : {m.name}
              </ListItem>
            ))}
          </List>
        </Stack>
      </Box>
    </Box>
  );
}
