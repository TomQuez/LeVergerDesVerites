import { Stack, Box, Typography } from "@mui/material";
import { ASSO, CONTACT } from "../Constant";

export function Mentions() {
  return (
    <Box id="mentions" sx={{ mx: 1 }}>
      <Stack
        spacing={2}
        sx={{ display: "flex", justifyContent: "center", textAlign: "center" }}
      >
        <Typography variant="subtitle1">Mentions Légales</Typography>
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
  );
}
