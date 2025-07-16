import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  { label: "خانه", href: "home" },
  { label: "پروژه‌ها", href: "projects" },
  { label: "رزومه", href: "resume" },
  { label: "تماس", href: "contact" },
];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [elevate, setElevate] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // سایه نوار هنگام اسکرول
  useEffect(() => {
    const handleScroll = () => {
      setElevate(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver برای تشخیص بخش فعال
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // یعنی حداقل ۵۰٪ از بخش دیده شود
    );

    navItems.forEach(({ href }) => {
      const el = document.getElementById(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // اسکرول نرم
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setDrawerOpen(false);
  };

  // منوی موبایل
  const drawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {navItems.map(({ label, href }) => (
          <ListItem key={label} disablePadding>
            <ListItemButton
              onClick={() => scrollToSection(href)}
              selected={activeSection === href}
            >
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  fontWeight: activeSection === href ? "bold" : "normal",
                  color: activeSection === href ? "primary" : "inherit",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      color="primary"
      elevation={elevate ? 4 : 0}
      sx={{
        transition: "box-shadow 0.3s ease-in-out",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        {/* لوگو یا نام */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: "bold",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => scrollToSection("home")}
        >
          مرتضی محمودی{" "}
          <Typography
            component="span"
            sx={{
              color: "secondary.main",
              fontWeight: "bold",
              mx: 1,
              display: { xs: "none", sm: "inline" },
            }}
          >
            {"{ توسعه‌دهنده فول‌استک وب }"}
          </Typography>
        </Typography>

        {/* دکمه‌های منو */}
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => setDrawerOpen(true)}
              size="large"
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              {drawerList}
            </Drawer>
          </>
        ) : (
          <Box>
            {navItems.map(({ label, href }) => (
              <Button
                key={label}
                onClick={() => scrollToSection(href)}
                sx={{
                  color: activeSection === href ? "#fff" : "#ffffffcc",
                  fontWeight: activeSection === href ? "bold" : "normal",
                  borderBottom: activeSection === href ? "2px solid #fff" : "none",
                  borderRadius: 0,
                  mx: 1,
                }}
              >
                {label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
