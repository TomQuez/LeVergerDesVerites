import { Stack, Box, Typography, Button, Paper, SvgIcon } from "@mui/material";
import { colors } from "../theme";

type ContactProps = {
  email: string;
  phoneDisplay: string;
  phoneE164: string;
};

const PhoneIcon = (props: React.ComponentProps<typeof SvgIcon>) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M6.62 10.79a15.46 15.46 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1v3.61a1 1 0 01-1 1A17.79 17.79 0 012 6a1 1 0 011-1h3.61a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1.02l-2.32 2.21z" />
  </SvgIcon>
);
const MailIcon = (props: React.ComponentProps<typeof SvgIcon>) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </SvgIcon>
);

function SanitizePhone(phone: string) {
  const cleaned = phone.replace(/[^\d+]/g, "");
  return cleaned.startsWith("+") ? cleaned : cleaned;
}
const getDisplayPhone = (display?: string, e164?: string) =>
  display || e164 || "";

export default function Contact({
  phoneDisplay,
  email,
  phoneE164,
}: ContactProps) {
  const telHref = `tel:${SanitizePhone(phoneE164)}`;
  const label = getDisplayPhone(phoneDisplay);
  const mailHref = `mailto:${email}?subject=${encodeURIComponent(
    "Contact -- Le Verger des Vérités"
  )}`;
  return (
    <Box
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
          variant="h3"
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
            coup de main au verger ? Nous serions ravis d’échanger avec vous.
          </Typography>
          <Stack
            spacing={2}
            direction={{ xs: "column", sm: "row" }}
            sx={{ alignItems: { sm: "center" }, zIndex: 200 }}
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
              aria-label={`Appeler le : ${label}`}
            >
              Appeler&nbsp;: {label}
            </Button>
            <Button
              component="a"
              href={mailHref}
              variant="contained"
              size="large"
              startIcon={<MailIcon />}
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
