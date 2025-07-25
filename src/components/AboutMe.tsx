// فایل: src/components/AboutMe.tsx
// کامپوننت AboutMe: معرفی کوتاه، عکس پروفایل، متن و آیکون شبکه‌های اجتماعی

import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Stack,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
const AboutMe = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="section"
      id="about"
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        py: 8,
        px: 2,
        backgroundColor: "#f9fafb", // پس‌زمینه روشن و ملایم
        borderRadius: 2,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)", // سایه ملایم
        fontFamily: "Vazirmatn, sans-serif",
      }}
    >
      {/* عکس پروفایل دایره‌ای با سایه */}
      <Avatar
        alt="مرتضی محمودی"
        src="/images/profile.jpg" // آدرس عکس رو درست کن با تصویر خودت
        sx={{
          width: isMobile ? 120 : 180,
          height: isMobile ? 120 : 180,
          boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
        }}
      />

      {/* متن معرفی و آیکون‌ها */}
      <Box sx={{ maxWidth: 600, textAlign: isMobile ? "center" : "right" }}>
        <Typography variant={isMobile ? "h5" : "h4"} fontWeight="bold" mb={2}>
          سلام! من مرتضی محمودی هستم
        </Typography>

        <Typography variant="body1" color="text.secondary" mb={3} lineHeight={1.6}>
          من توسعه‌دهنده فول‌استک وب هستم، تخصص در React، Next.js، NestJS و PostgreSQL دارم.
          علاقه‌مند به طراحی رابط‌های کاربری زیبا و کارآمد با Material UI و Tailwind هستم.
          هدفم ساخت نرم‌افزارهای کاربردی و با کیفیت برای کسب‌وکارها و افراد است.
        </Typography>

        {/* آیکون شبکه‌های اجتماعی */}
        <Stack direction="row" spacing={2} justifyContent={isMobile ? "center" : "flex-end"}>
          <IconButton
            color="primary"
            aria-label="LinkedIn"
            component="a"
            href="https://www.linkedin.com/in/morteza-mahmoudi"
            target="_blank"
            rel="noopener noreferrer"
            size="large"
          >
            <LinkedInIcon fontSize="inherit" />
          </IconButton>
         
          <IconButton
            color="primary"
            aria-label="Telegram"
            component="a"
            href="https://t.me/your-telegram-username"
            target="_blank"
            rel="noopener noreferrer"
            size="large"
          >
            <TelegramIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default AboutMe;
