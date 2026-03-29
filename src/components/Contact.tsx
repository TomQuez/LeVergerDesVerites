import { Stack, Box, Typography, Button, Paper } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { colors } from "../theme";
import { useFadeIn } from "../hooks/useFadeIn";

type ContactProps = {
  email: string;
  phoneDisplay: string;
  phoneE164: string;
};

function sanitizePhone(phone: string) {
  return phone.replace(/[^\d+]/g, "");
}

export default function Contact({
  phoneDisplay,
  email,
  phoneE164,
}: ContactProps) {
  const { ref, isVisible } = useFadeIn();
  const telHref = `tel:${sanitizePhone(phoneE164)}`;
  const mailHref = `mailto:${email}?subject=${encodeURIComponent(
    "Contact -- Le Verger des Vérités",
  )}`;
  return (
    <Box
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      component="section"
      id="contact"
      sx={{
        py: { xs: 6, md: 10 },
        background: colors.beige,
      }}
    >
      <Box
        sx={{
          maxWidth: 900,
          mx: "auto",
          px: 2,
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{ textAlign: "center", mb: { xs: 3, md: 4 } }}
        >
          Contactez-nous
        </Typography>
        <Paper
          elevation={0}
          sx={{
            px: { xs: 2, md: 4 },
            py: { xs: 3, md: 4 },
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: 3,
            backdropFilter: "blur(2px)",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              opacity: 0.9,
              mb: 3,
            }}
          >
            Une question, une envie de participer, proposer un atelier ou un
            coup de main au verger ? Nous serions ravis d'échanger avec vous.
          </Typography>
          <Stack
            spacing={2}
            direction={{ xs: "column", sm: "row" }}
            sx={{ alignItems: { sm: "center" } }}
          >
            <Button
              component="a"
              href={telHref}
              variant="contained"
              size="large"
              startIcon={<PhoneIcon />}
              sx={{
                flex: 1,
                py: 1.5,
              }}
              aria-label={`Appeler le : ${phoneDisplay}`}
            >
              Appeler&nbsp;: {phoneDisplay}
            </Button>
            <Button
              component="a"
              href={mailHref}
              variant="contained"
              size="large"
              startIcon={<EmailIcon />}
              sx={{
                flex: 1,
                py: 1.5,
              }}
              aria-label={`Envoyer un email à : ${email}`}
            >
              Envoyer un email : {email}
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
}
