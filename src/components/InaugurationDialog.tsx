import { useState } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Button,
  IconButton,
  Chip,
  keyframes,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";
import { colors } from "../theme";
import { ASSO } from "../Constant";

/* ── CSS firework animations ── */

const rocketUp = keyframes`
  0%   { opacity: 1; transform: translateY(0); }
  50%  { opacity: 1; }
  100% { opacity: 0; transform: translateY(-160px); }
`;

const burst = keyframes`
  0%   { opacity: 1; transform: translate(0, 0) scale(1); }
  100% { opacity: 0; transform: translate(var(--tx), var(--ty)) scale(0); }
`;

const sparkle = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(0.8); }
  50%      { opacity: 1;   transform: scale(1.2); }
`;

const confettiFall = keyframes`
  0%   { opacity: 1; transform: translateY(0) rotate(0deg); }
  100% { opacity: 0; transform: translateY(120px) rotate(720deg); }
`;

const popIn = keyframes`
  0%   { opacity: 0; transform: scale(0.85); }
  60%  { transform: scale(1.03); }
  100% { opacity: 1; transform: scale(1); }
`;

/* Particle positions for burst effect (12 directions) */
const particles = Array.from({ length: 12 }, (_, i) => {
  const angle = (i * 30 * Math.PI) / 180;
  const dist = 28 + Math.random() * 18;
  return {
    tx: `${Math.cos(angle) * dist}px`,
    ty: `${Math.sin(angle) * dist}px`,
    delay: `${Math.random() * 0.3}s`,
  };
});

/* Confetti pieces */
const confettiPieces = Array.from({ length: 18 }, (_, i) => ({
  left: `${8 + Math.random() * 84}%`,
  delay: `${Math.random() * 2}s`,
  duration: `${2 + Math.random() * 1.5}s`,
  color: [colors.green, colors.greenDark, colors.oak, "#E8A87C", "#D4AF37"][
    i % 5
  ],
  size: 4 + Math.random() * 4,
}));

/* Sparkle stars */
const stars = Array.from({ length: 8 }, () => ({
  left: `${10 + Math.random() * 80}%`,
  top: `${10 + Math.random() * 60}%`,
  delay: `${Math.random() * 2}s`,
  size: 3 + Math.random() * 4,
}));

/* Firework burst positions */
const fireworks = [
  { left: "20%", top: "30%", delay: "0.2s", color: "#D4AF37" },
  { left: "75%", top: "25%", delay: "0.8s", color: colors.green },
  { left: "50%", top: "15%", delay: "1.5s", color: "#E8A87C" },
];

export default function InaugurationDialog() {
  const [open, setOpen] = useState(true);

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      maxWidth="sm"
      fullWidth
      slotProps={{
        backdrop: {
          sx: {
            backdropFilter: "blur(4px)",
            backgroundColor: "rgba(47, 42, 36, 0.4)",
          },
        },
      }}
      PaperProps={{
        sx: {
          borderRadius: 4,
          overflow: "hidden",
          mx: 2,
          animation: `${popIn} 0.5s ease-out`,
        },
      }}
    >
      {/* Decorative top banner with fireworks */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${colors.green} 0%, ${colors.greenDark} 100%)`,
          py: 4,
          px: 3,
          position: "relative",
          textAlign: "center",
          overflow: "hidden",
          minHeight: 130,
        }}
      >
        {/* Close button */}
        <IconButton
          aria-label="Fermer"
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            color: colors.text,
            bgcolor: "rgba(255,255,255,0.3)",
            "&:hover": { bgcolor: "rgba(255,255,255,0.5)" },
            zIndex: 2,
          }}
          size="small"
        >
          <CloseIcon fontSize="small" />
        </IconButton>

        {/* Confetti falling */}
        {confettiPieces.map((c, i) => (
          <Box
            key={`confetti-${i}`}
            sx={{
              position: "absolute",
              left: c.left,
              top: -8,
              width: c.size,
              height: c.size * 1.6,
              bgcolor: c.color,
              borderRadius: "1px",
              animation: `${confettiFall} ${c.duration} ${c.delay} ease-in infinite`,
              zIndex: 1,
            }}
          />
        ))}

        {/* Sparkle stars */}
        {stars.map((s, i) => (
          <Box
            key={`star-${i}`}
            sx={{
              position: "absolute",
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              bgcolor: "rgba(255,255,255,0.8)",
              borderRadius: "50%",
              animation: `${sparkle} 1.5s ${s.delay} ease-in-out infinite`,
              boxShadow: "0 0 4px rgba(255,255,255,0.6)",
              zIndex: 1,
            }}
          />
        ))}

        {/* Firework bursts */}
        {fireworks.map((fw, fi) => (
          <Box
            key={`fw-${fi}`}
            sx={{ position: "absolute", left: fw.left, top: fw.top, zIndex: 1 }}
          >
            {/* Rocket trail */}
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                bottom: 0,
                width: 2,
                height: 8,
                bgcolor: fw.color,
                borderRadius: 1,
                animation: `${rocketUp} 0.6s ${fw.delay} ease-out forwards`,
                opacity: 0,
                animationFillMode: "backwards",
              }}
            />
            {/* Burst particles */}
            {particles.map((p, pi) => (
              <Box
                key={pi}
                sx={{
                  position: "absolute",
                  width: 4,
                  height: 4,
                  bgcolor: fw.color,
                  borderRadius: "50%",
                  "--tx": p.tx,
                  "--ty": p.ty,
                  animation: `${burst} 1s calc(${fw.delay} + 0.5s + ${p.delay}) ease-out forwards`,
                  opacity: 0,
                  animationFillMode: "backwards",
                  boxShadow: `0 0 3px ${fw.color}`,
                } as React.CSSProperties}
              />
            ))}
          </Box>
        ))}

        {/* Title content */}
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Typography
            sx={{ fontSize: "2.2rem", mb: 0.5, lineHeight: 1 }}
            role="img"
            aria-label="Fête"
          >
            🎉
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            sx={{ color: colors.text, lineHeight: 1.3 }}
          >
            Inauguration publique
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: colors.oakDark, mt: 0.5, fontWeight: 500 }}
          >
            Vous êtes tous invités !
          </Typography>
        </Box>
      </Box>

      <DialogContent sx={{ p: 0 }}>
        <Box sx={{ px: { xs: 3, sm: 4 }, py: 3 }}>
          <Typography
            variant="body1"
            sx={{ mb: 3, textAlign: "center", fontSize: "1.05rem" }}
          >
            Rejoignez-nous pour célébrer le lancement officiel de l'association{" "}
            <strong>{ASSO.name}</strong> ! Un moment convivial vous attend
            au verger
             <Typography variant="caption">
            (en face de la caserne de pompier de Lapalisse, place jean Moulin).
          </Typography>
          </Typography>
         

          {/* Event details */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
              mb: 3,
              p: 2.5,
              borderRadius: 3,
              bgcolor: colors.beige,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Chip
                icon={<CalendarTodayIcon />}
                label="Samedi 2 mai 2026"
                variant="outlined"
                sx={{
                  borderColor: colors.oak,
                  color: colors.text,
                  fontWeight: 600,
                  "& .MuiChip-icon": { color: colors.oak },
                }}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Chip
                icon={<AccessTimeIcon />}
                label="16h00 — 18h00"
                variant="outlined"
                sx={{
                  borderColor: colors.oak,
                  color: colors.text,
                  fontWeight: 600,
                  "& .MuiChip-icon": { color: colors.oak },
                }}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Chip
                icon={<PlaceIcon />}
                label="Lapalisse (03120)"
                variant="outlined"
                sx={{
                  borderColor: colors.oak,
                  color: colors.text,
                  fontWeight: 600,
                  "& .MuiChip-icon": { color: colors.oak },
                }}
              />
            </Box>
          </Box>

          <Typography
            variant="body2"
            sx={{ textAlign: "center", color: "text.secondary", mb: 3 }}
          >
            Venez découvrir nos projets autour du verger partagé, de la
            biodiversité et du jardinage biologique. 🌳🍎
          </Typography>

          <Button
            fullWidth
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => setOpen(false)}
            sx={{
              py: 1.5,
              fontSize: "1rem",
            }}
          >
            J'ai hâte d'y être !
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
