import { Box, Stack, Typography, useTheme } from "@mui/material";
import { colors } from "../theme";
import CastleIcon from "@mui/icons-material/Castle";

export default function Hero() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: `linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0)60%),${colors.beige}`,
        pt: { xs: 6, md: 10 },
        pb: { xs: 6, md: 10 },
        maxWidth: "100%",
      }}
    >
      <Box>
        <Stack
          spacing={3}
          alignItems="start"
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            mx: "auto",
            maxWidth: 800,
            px: 2,
          }}
        >
          <Typography variant="h2" component="h1">
            Un Verger Participatif Pour Cultiver Le Vivant
          </Typography>
          <Typography
            variant="h6"
            sx={{
              width: "100%",
              opacity: 0.9,
            }}
          >
            Nous plantons, entretenons et partageons un verger collectif pour
            promouvoir l'agriculture vivrière, la biodiversité et dynamiser nos
            territoires. Le verger est situé à {""}
            <a
              href="https://www.ville-lapalisse.fr/"
              target="blank"
              style={{
                textDecoration: "none",
                color: theme.palette.secondary.main,
              }}
            >
              Lapalisse
              <CastleIcon sx={{ ml: 0.5, fontSize: 16 }} />
            </a>{" "}
            dans le beau département Bourbonnais de l'Allier (03).
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
