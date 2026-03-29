import { Box, Link, Typography, Stack, Divider } from "@mui/material";
import { colors } from "../theme";
import { ASSO, CONTACT } from "../Constant";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 4, md: 6 },
        px: 2,
        bgcolor: colors.oakDark,
        color: "rgba(255,255,255,0.85)",
        textAlign: "center",
      }}
    >
      <Stack spacing={2} alignItems="center">
        <Typography variant="body2" sx={{ fontStyle: "italic", opacity: 0.9 }}>
          Cultiver le vivant, ensemble.
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          divider={
            <Divider
              orientation="vertical"
              flexItem
              sx={{ borderColor: "rgba(255,255,255,0.3)" }}
            />
          }
        >
          <Link href="#contact" sx={{ color: "inherit" }}>
            Contact
          </Link>
          <Link href="#mentions" sx={{ color: "inherit" }}>
            Mentions légales
          </Link>
          <Link href={`mailto:${CONTACT.email}`} sx={{ color: "inherit" }}>
            {CONTACT.email}
          </Link>
        </Stack>
        <Typography variant="caption" sx={{ opacity: 0.6 }}>
          &copy; {new Date().getFullYear()} {ASSO.name} &middot; Association Loi
          1901
        </Typography>
      </Stack>
    </Box>
  );
}
