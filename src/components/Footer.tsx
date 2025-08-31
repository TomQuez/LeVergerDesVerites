import { Box, Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 6, width: "100%", textAlign: "center" }}>
      <Typography variant="body2" sx={{ opacity: 0.8 }}>
        © {new Date().getFullYear()} — Le Verger des Vérités · Site statique
        construit avec Vite + React + MUI
      </Typography>
      <Typography variant="body2" sx={{ opacity: 0.8 }}>
        <Link href="#contact">Contact</Link> ·{" "}
        <Link href="#mentions">Mentions légales</Link>
      </Typography>
    </Box>
  );
}
