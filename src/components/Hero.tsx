import { Box, Stack, Typography, Button } from "@mui/material";
import { colors } from "../theme";
import CastleIcon from "@mui/icons-material/Castle";

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: { xs: "60vh", md: "70vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "url(/images/six-pers-plantent-arbres.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(47,42,36,0.55) 0%, rgba(47,42,36,0.35) 100%)",
        },
      }}
    >
      <Stack
        spacing={3}
        alignItems="center"
        sx={{
          position: "relative",
          textAlign: "center",
          mx: "auto",
          maxWidth: 800,
          px: 3,
          py: { xs: 8, md: 12 },
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{ color: "#fff", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
        >
          Un Verger Participatif Pour Cultiver Le Vivant
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "rgba(255,255,255,0.9)", maxWidth: 650 }}
        >
          Nous plantons, entretenons et partageons un verger collectif pour
          promouvoir la biodiversité et dynamiser nos territoires à{" "}
          <a
            href="https://www.ville-lapalisse.fr/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: colors.green, textDecoration: "none" }}
          >
            Lapalisse
            <CastleIcon sx={{ ml: 0.5, fontSize: 16 }} />
          </a>{" "}
          dans l'Allier (03).
        </Typography>
        <Button
          variant="contained"
          size="large"
          href="#contact"
          sx={{
            mt: 2,
            px: 4,
            py: 1.5,
            fontSize: "1.1rem",
          }}
        >
          Nous rejoindre
        </Button>
      </Stack>
    </Box>
  );
}
