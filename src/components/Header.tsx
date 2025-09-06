import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const navItem = [
  {
    label: "Actus",
    href: "#actus",
  },
  {
    label: "L'Asso",
    href: "#asso",
  },
  {
    label: "Nos actions",
    href: "#actions",
  },
  {
    label: "Contact",
    href: "#contact",
  },
  {
    label: "On parle de nous",
    href: "#presse",
  },

  {
    label: "Mentions légales",
    href: "#mentions",
  },
];

export default function Header() {
  const theme = useTheme();
  const isDesktop: boolean = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer =
    (next: boolean) => (evt: React.KeyboardEvent | React.MouseEvent) => {
      if (
        evt.type === "keydown" &&
        "key" in evt &&
        (evt.key === "Tab" || evt.key === "Shift")
      ) {
        return;
      }
      setOpen(next);
    };
  return (
    <AppBar elevation={0} position="sticky">
      <Toolbar
        sx={{ maxWidth: 1200, mx: "auto", width: "100%", height: "30px" }}
      >
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
          Le Verger Des Vérités
        </Typography>
        {isDesktop && (
          <Box>
            {navItem.map((item) => (
              <Button key={item.label} color="inherit" href={item.href}>
                {item.label}
              </Button>
            ))}
          </Box>
        )}
        {!isDesktop && (
          <>
            <IconButton
              color="inherit"
              edge="end"
              aria-label="Ouvrir le menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={open}
              onClose={toggleDrawer(false)}
              slotProps={{
                paper: {
                  sx: { width: "80%", maxWidth: 320 },
                },
              }}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {navItem.map((item) => (
                    <ListItemButton
                      key={item.label}
                      component="a"
                      href={item.href}
                    >
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
