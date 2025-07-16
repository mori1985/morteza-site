// فایل: src/components/Contact.tsx
import { Box, Typography, IconButton, Container, Stack, useTheme } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactForm from "@/components/ContactForm";
import { useEffect } from "react";

export default function Contact() {
  const theme = useTheme();

  useEffect(() => {
    document.documentElement.dir = "rtl"; // فعال کردن راست‌چین برای زبان فارسی
  }, []);

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        background: "linear-gradient(to top right, #e3f2fd, #ffffff)",
      }}
    >
      <Container maxWidth="sm">
        {/* عنوان بخش تماس */}
        <Typography
          variant="h5"
          align="center"
          fontWeight="bold"
          gutterBottom
          sx={{
            background: "linear-gradient(90deg, #0066cc, #00b0ff, #0066cc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            userSelect: "none",
            mb: 4,
          }}
        >
          ارتباط با من
        </Typography>

        {/* لیست راه‌های ارتباطی */}
        <Stack spacing={4}>
          {/* واتساپ */}
          <Box display="flex" alignItems="center">
            <IconButton
              component="a"
              href="https://wa.me/989391872895"
              target="_blank"
              rel="noopener"
              color="success"
              sx={{ mr: 2 }}
            >
              <WhatsAppIcon fontSize="large" />
            </IconButton>
            <Typography variant="body1">واتساپ: 09391872895</Typography>
          </Box>

          {/* تلگرام */}
          <Box display="flex" alignItems="center">
            <IconButton
              component="a"
              href="https://t.me/Mortezamm1985"
              target="_blank"
              rel="noopener"
              color="primary"
              sx={{ mr: 2 }}
            >
              <TelegramIcon fontSize="large" />
            </IconButton>
            <Typography variant="body1">تلگرام: @Mortezamm1985</Typography>
          </Box>

          {/* ایمیل */}
          <Box display="flex" alignItems="center">
            <IconButton
              component="a"
              href="mailto:mortezamahmodi830@gmail.com"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <EmailIcon fontSize="large" />
            </IconButton>
            <Typography variant="body1">
              ایمیل: mortezamahmodi830@gmail.com
            </Typography>
          </Box>

          {/* شماره تماس */}
          <Box display="flex" alignItems="center">
            <IconButton
              component="a"
              href="tel:+989391872895"
              color="secondary"
              sx={{ mr: 2 }}
            >
              <PhoneIcon fontSize="large" />
            </IconButton>
            <Typography variant="body1">تلفن: 09391872895</Typography>
          </Box>

          {/* لینکدین */}
          <Box display="flex" alignItems="center">
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/morteza-mahmoudi-39899015a/"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              sx={{ mr: 2 }}
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <Typography variant="body1">LinkedIn: Morteza Mahmoudi</Typography>
          </Box>

          {/* فرم تماس */}
          <ContactForm />
        </Stack>
      </Container>
    </Box>
  );
}
