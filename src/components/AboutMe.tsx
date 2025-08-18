import { Box, Typography, Avatar, Stack, IconButton, useMediaQuery, useTheme } from "@mui/material";
import Head from "next/head";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";

const AboutMe = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Head>
        <title>درباره مرتضی محمودی | توسعه‌دهنده فول‌استک</title>
        <meta name="description" content="مرتضی محمودی، توسعه‌دهنده فول‌استک وب با تخصص در React، Next.js، NestJS و PostgreSQL. درباره من و مهارت‌هایم بیشتر بدانید." />
        <meta name="keywords" content="درباره مرتضی محمودی, برنامه‌نویس, React, Next.js, توسعه‌دهنده وب" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="درباره مرتضی محمودی" />
        <meta property="og:description" content="معرفی مرتضی محمودی و مهارت‌های او در توسعه وب" />
        <meta property="og:url" content="https://morteza-mahmoudi-dev.ilarta.ir/about" />
        <meta property="og:image" content="https://morteza-mahmoudi-dev.ilarta.ir/images/profile.webp" />
      </Head>
      <Box component="section" id="about" sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: "center", justifyContent: "center", gap: 4, py: 8, px: 2, backgroundColor: "#f9fafb", borderRadius: 2, boxShadow: "0 4px 12px rgba(0,0,0,0.1)", fontFamily: "Vazirmatn, sans-serif" }}>
        <Avatar
          alt="مرتضی محمودی - توسعه‌دهنده فول‌استک"
          src="/images/profile.webp"
          sx={{ width: isMobile ? 120 : 180, height: isMobile ? 120 : 180, boxShadow: "0 8px 16px rgba(0,0,0,0.2)" }}
        />
        <Box sx={{ maxWidth: 600, textAlign: isMobile ? "center" : "right" }}>
          <Typography variant={isMobile ? "h5" : "h4"} fontWeight="bold" mb={2}>سلام! من مرتضی محمودی هستم</Typography>
          <Typography variant="body1" color="text.secondary" mb={3} lineHeight={1.6}>
            من توسعه‌دهنده فول‌استک وب هستم، تخصص در React، Next.js، NestJS و PostgreSQL دارم. علاقه‌مند به طراحی رابط‌های کاربری زیبا و کارآمد با Material UI و Tailwind هستم. هدفم ساخت نرم‌افزارهای کاربردی و با کیفیت برای کسب‌وکارها و افراد است.
          </Typography>
          <Stack direction="row" spacing={2} justifyContent={isMobile ? "center" : "flex-end"}>
            <IconButton color="primary" aria-label="LinkedIn" component="a" href="https://www.linkedin.com/in/morteza-mahmoudi-39899015a/" target="_blank" rel="noopener noreferrer" size="large"><LinkedInIcon fontSize="inherit" /></IconButton>
            <IconButton color="primary" aria-label="Telegram" component="a" href="https://t.me/Mortezamm1985" target="_blank" rel="noopener noreferrer" size="large"><TelegramIcon fontSize="inherit" /></IconButton>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default AboutMe;