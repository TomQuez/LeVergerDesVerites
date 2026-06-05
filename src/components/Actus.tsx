import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
} from "@mui/material";
import { useFadeIn } from "../hooks/useFadeIn";
import { newsItems } from "../data/newsItems";

export default function Actus() {
  const { ref, isVisible } = useFadeIn();
  return (
    <Box
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      component="section"
      id="actus"
      sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.paper" }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 3 } }}>
        <Typography
          variant="h2"
          component="h2"
          gutterBottom
          sx={{ textAlign: "center", width: "100%" }}
        >
          Actus
        </Typography>
        <Grid container justifyContent="center" mb={4}>
          {newsItems.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.title}>
              <Card
                key={index}
                elevation={0}
                sx={{
                  border: "1px solid rgba(0,0,0,0.06)",
                  height: "100%",
                  m: 2,
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
                    image={item.image}
                    alt={item.title}
                    loading="lazy"
                    sx={{ borderRadius: 2, objectFit: "cover" }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 3,
                      mt: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      {item.icon}
                      <Typography variant="h3" component="h3">
                        {item.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2">{item.description}</Typography>
                    {item.links && (
                      <Box
                        sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                      >
                        {item.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="body2"
                            sx={{ fontWeight: 600 }}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </Box>
                    )}
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
