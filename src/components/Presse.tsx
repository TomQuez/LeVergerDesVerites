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

export default function Presse() {
  type PresItem = {
    title: string;
    url: string;
    image?: string;
  };

  const getFavicon = (u: string) => {
    try {
      return new URL(u).hostname.replace(/^www\./, "");
    } catch {
      return "";
    }
  };
  const getHost = (u: string) => {
    try {
      return new URL(u).hostname.replace(/^www\./, "");
    } catch {
      return "";
    }
  };
  const presItems: PresItem[] = [
    {
      title: "La Montagne - Le verger des vérités",
      url: "https://www.lamontagne.fr/lapalisse-03120/actualites/un-verger-comme-un-symbole_14640788/",
      image: "/images/presse/laMontagne.png",
    },
    {
      title:
        "La mairie de Lapalisse - Un verger participatif pour cultiver le vivant",
      url: "https://www.facebook.com/VilleLapalisse/posts/%F0%9D%90%83%F0%9D%90%9E%F0%9D%90%AC-%F0%9D%90%A7%F0%9D%90%A8%F0%9D%90%AE%F0%9D%90%AF%F0%9D%90%9E%F0%9D%90%A5%F0%9D%90%A5%F0%9D%90%9E%F0%9D%90%AC-%F0%9D%90%9D%F0%9D%90%AE-%F0%9D%90%AF%F0%9D%90%9E%F0%9D%90%AB%F0%9D%90%A0%F0%9D%90%9E%F0%9D%90%AB-%F0%9D%90%9D%F0%9D%90%9E%F0%9D%90%AC-%F0%9D%90%AF%F0%9D%90%9E%CC%81%F0%9D%90%AB%F0%9D%90%A2%F0%9D%90%AD%F0%9D%90%9E%CC%81%F0%9D%90%AC-quelques-mois-apr%C3%A8s-la-plantation-le-verge/1051294657192188/",
      image: "/images/presse/villeLapalisse.png",
    },
  ];
  return (
    <Box id="presse" sx={{ textAlign: "center", py: 4 }}>
      <Typography variant="h3">On parle de nous</Typography>
      <Grid
        container
        spacing={2}
        sx={{
          mt: 2,
          justifyContent: "center",
        }}
      >
        {presItems.map((item) => (
          <Grid sx={{ xs: 12, sm: 6, md: 5 }} key={item.url}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 2,
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
                  component={"img"}
                  loading="lazy"
                  image={item.image}
                  alt={item.title}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = getFavicon(
                      item.url
                    );
                  }}
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
  );
}
