import { Card, CardContent, Typography, CardMedia, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useFadeIn } from "../hooks/useFadeIn";
import { cardItems } from "../data/cardItems";

export default function Cards() {
  const { ref, isVisible } = useFadeIn();
  return (
    <Box
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      component="section"
      id="actions"
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: "background.default",
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 3 } }}>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{ textAlign: "center", width: "100%" }}
        >
          Nos actions
        </Typography>
        <Grid container spacing={3}>
          {cardItems.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.title}>
              <Card
                elevation={0}
                sx={{
                  border: "1px solid rgba(0,0,0,0.06)",
                  height: "100%",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  },
                }}
              >
                <CardContent>
                  <CardMedia
                    component="img"
                    src={item.image}
                    alt={item.description}
                    loading="lazy"
                    sx={{ borderRadius: 2, height: "auto", objectFit: "cover" }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 3,
                      mt: 2,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      {item.icon && <item.icon />}
                      <Typography variant="h3" component="h3">
                        {item.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2">{item.description}</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
