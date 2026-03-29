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
import { navItems } from "../data/navItems";

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
    <>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
        }}
      >
        <Toolbar
          sx={{ maxWidth: 1200, mx: "auto", width: "100%", minHeight: { xs: 56, sm: 64 } }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexGrow: 1,
            }}
          >
            <Box
              component="img"
              src="/favicon.svg"
              alt=""
              sx={{ width: 32, height: 32 }}
            />
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Le Verger Des Vérités
            </Typography>
          </Box>
          {isDesktop && (
            <Box component="nav" aria-label="Navigation principale">
              {navItems.map((item) => (
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
                  component="nav"
                  aria-label="Navigation principale"
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <List>
                    {navItems.map((item) => (
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
      <Toolbar />
    </>
  );
}
