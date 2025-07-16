// فایل: src/components/Hero.tsx
// کامپوننت معرفی اولیه (Hero Section) صفحه اصلی با عکس، نام، توضیح و دکمه‌ها

import { Container, Typography, Button, Stack, Box, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

// آدرس عکس پیش‌فرض (موقتاً استفاده می‌کنیم تا عکس اصلی آماده بشه)
const profileImage = "/profile-placeholder.png"; // می‌تونی بعداً عوضش کنی

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="section"
      id="home"
      sx={{
        py: 10,
        background: "linear-gradient(to right, #f0f2f5, #e8ebef)",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        {/* تصویر پروفایل با افکت انیمیشن */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            sx={{
              width: isMobile ? 150 : 200,
              height: isMobile ? 150 : 200,
              mx: "auto",
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              mb: 4,
            }}
          >
            <Image
              src={profileImage}
              alt="مرتضی محمودی"
              width={200}
              height={200}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </motion.div>

        {/* نام و عنوان */}
        <Typography variant={isMobile ? "h4" : "h3"} fontWeight="bold" gutterBottom>
          مرتضی محمودی
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          توسعه‌دهنده فول‌استک وب با React، Next.js، NestJS و PostgreSQL
        </Typography>

        {/* دکمه‌ها با افکت ورود */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Stack direction={isMobile ? "column" : "row"} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              href="#projects"
              size="large"
              sx={{ borderRadius: 8 }}
            >
              مشاهده پروژه‌ها
            </Button>
            <Button
              variant="outlined"
              color="primary"
              href="#contact"
              size="large"
              sx={{ borderRadius: 8 }}
            >
              تماس با من
            </Button>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
