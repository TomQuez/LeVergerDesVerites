import { Stack, Box, Typography } from "@mui/material";
import { ASSO, CONTACT } from "../Constant";
import { useFadeIn } from "../hooks/useFadeIn";

export default function Mentions() {
  const { ref, isVisible } = useFadeIn();
  return (
    <Box
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      component="section"
      id="mentions"
      sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.default" }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 3 } }}>
        <Stack
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography variant="h2" component="h2">Mentions Légales</Typography>
          <Typography variant="caption">
            Le site Le Verger des Vérités est édité par l'association du même nom.
          </Typography>
          <Typography variant="caption">Numéro RNA : {ASSO.RNA}</Typography>
          <Typography variant="caption">Siège social : {ASSO.siege}</Typography>
          <Typography variant="caption">{CONTACT.email}</Typography>
          <Typography variant="caption">
            Directeur de la publication : {ASSO.pres}
          </Typography>
          <Typography variant="caption">Association Loi 1901</Typography>
          <Typography variant="caption">
            Hébergeur : GitHub, Inc., 88 Colin P. Kelly Jr. St, San Francisco, CA
            94107, USA, +1 877-448-4820.
          </Typography>
          <Typography variant="caption">
            Aucun cookie n'est utilisé pour ce site
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
