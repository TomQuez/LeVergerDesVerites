import {
  Typography,
  Box,
  Card,
  CardContent,
  CardActionArea,
  Grid,
  Stack,
  CardMedia,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useFadeIn } from "../hooks/useFadeIn";
import { pressItems } from "../data/pressItems";

const getHost = (u: string) => {
  try {
    return new URL(u).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
};

export default function Presse() {
  const { ref, isVisible } = useFadeIn();
  return (
    <Box
      ref={ref}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      component="section"
      id="presse"
      sx={{
        textAlign: "center",
        py: { xs: 6, md: 10 },
        bgcolor: "background.paper",
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 2, md: 3 } }}>
        <Typography variant="h2" component="h2">
          On parle de nous
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            mt: 2,
            justifyContent: "center",
          }}
        >
          {pressItems.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 5 }} key={item.url}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 2,
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  },
                }}
                variant="outlined"
              >
                <CardActionArea
                  component="a"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardMedia
                    component="img"
                    loading="lazy"
                    image={item.image}
                    alt={item.title}
                    sx={{ objectFit: "contain", width: "100%", height: "auto" }}
                  />
                  <CardContent sx={{ pt: 1.5 }}>
                    <Stack
                      spacing={0.5}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography
                          variant="h6"
                          component="div"
                          sx={{ textWrap: "balance" }}
                        >
                          {item.title}
                        </Typography>
                        <OpenInNewIcon fontSize="small" />
                      </Stack>
                      <Typography variant="body2" color="text.secondary">
                        {getHost(item.url)}
                      </Typography>
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
