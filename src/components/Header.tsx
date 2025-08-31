import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

export default function Header() {
  return (
    <AppBar elevation={0} position="sticky">
      <Toolbar sx={{ maxWidth: 1200, mx: "auto", width: "100%" }}>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
          Le Verger Des Vérités
        </Typography>
        <Box>
          <Button color="inherit">Asso</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
