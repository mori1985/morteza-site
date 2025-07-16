// src/components/Resume.tsx

import React from "react";
import {
  Box,
  Container,
  CssBaseline,
  Divider,
  LinearProgress,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import LanguageIcon from "@mui/icons-material/Language";
import CodeIcon from "@mui/icons-material/Code";
import "@fontsource/vazirmatn";

const theme = createTheme({
  typography: {
    fontFamily: "Vazirmatn, sans-serif",
  },
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    secondary: { main: "#ff4081" },
    background: { default: "#f9fafb" },
  },
});

const workExperience = [
  {
    title: "ناظر سامانه‌های هوشمند",
    company: "اداره کل راهداری و حمل و نقل جاده‌ای",
    duration: "از سال 1394 تاکنون",
    description:
      "نظارت بر پیاده‌سازی و عملکرد سامانه‌های هوشمند حمل و نقل، تحلیل داده‌ها و بهبود فرآیندها.",
  },
  {
    title: "کارشناس شبکه",
    company: "شرکت خصوصی",
    duration: "سال‌های گذشته",
    description:
      "پشتیبانی و مدیریت شبکه‌های سیسکو و میکروتیک، نصب و راه‌اندازی تجهیزات شبکه، تضمین امنیت و پایداری شبکه.",
  },
  {
    title: "توسعه‌دهنده فول‌استک وب",
    company: "فریلنس / پروژه‌های شخصی",
    duration: "فروردین 1399 - حالا",
    description:
      "برنامه‌نویسی فول‌استک با React، NestJS، PostgreSQL، MongoDB، REST API، Tailwind CSS و Material UI.",
  },
];

const education = [
  {
    degree: "کارشناسی ارشد مهندسی کامپیوتر",
    university: "دانشگاه علم و صنعت ایران",
    duration: "1400 - 1402",
    description:
      "تحقیق و پروژه‌های تخصصی در زمینه نرم‌افزارهای مقیاس‌پذیر، شبکه‌های کامپیوتری و امنیت اطلاعات.",
  },
  {
    degree: "کارشناسی مهندسی مخابرات",
    university: "دانشگاه رجا",
    duration: "1389 - 1391",
    description: "تحقیق و پروژه‌های تخصصی در زمینه شبکه‌های کامپیوتری.",
  },
];

const skills = [
  { name: "React", level: 90 },
  { name: "NestJS", level: 85 },
  { name: "PostgreSQL", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 75 },
  { name: "Material UI", level: 80 },
  { name: "شبکه (سیسکو و میکروتیک)", level: 85 },
  { name: "REST API", level: 80 },
];

const languages = [
  { name: "فارسی", level: 100 },
  { name: "انگلیسی", level: 70 },
];

const ColoredLinearProgress = ({ value }: { value: number }) => (
  <LinearProgress
    variant="determinate"
    value={value}
    sx={{
      height: 10,
      borderRadius: 5,
      [`& .MuiLinearProgress-bar`]: {
        borderRadius: 5,
        backgroundColor:
          value > 80 ? "#4caf50" : value > 60 ? "#ff9800" : "#f44336",
      },
    }}
  />
);

export default function ResumePage() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 6 }}>
        {/* هدر */}
        <Box id="resume" textAlign="center" mb={6}>
          <Typography variant={isMobile ? "h4" : "h3"} fontWeight="bold" gutterBottom>
            رزومه مرتضی محمودی
          </Typography>
          <Typography variant="h6" color="text.secondary">
            توسعه‌دهنده فول‌استک وب | متخصص React و NestJS و Next و PostgreSQL و MongoDB | کارشناس شبکه
          </Typography>
        </Box>

        {/* تجربه کاری و تحصیلات با Flex */}
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          gap={6}
          flexWrap="wrap"
        >
          {/* تجربه کاری */}
          <Box flex={1} minWidth={isMobile ? "100%" : "48%"}>
            <Box display="flex" alignItems="center" mb={2}>
              <WorkIcon color="primary" fontSize="large" />
              <Typography variant="h5" fontWeight="bold" ml={1}>
                تجربه کاری
              </Typography>
            </Box>

            {workExperience.map((job, i) => (
              <Box
                key={i}
                mb={3}
                sx={{ backgroundColor: "#fff", p: 2, borderRadius: 2, boxShadow: 2 }}
              >
                <Typography variant="h6" fontWeight="600">
                  {job.title}
                </Typography>
                <Typography variant="subtitle2" color="primary" fontWeight="600">
                  {job.company} | {job.duration}
                </Typography>
                <Typography variant="body2" mt={1} color="text.secondary">
                  {job.description}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* تحصیلات */}
          <Box flex={1} minWidth={isMobile ? "100%" : "48%"}>
            <Box display="flex" alignItems="center" mb={2}>
              <SchoolIcon color="secondary" fontSize="large" />
              <Typography variant="h5" fontWeight="bold" ml={1}>
                تحصیلات
              </Typography>
            </Box>

            {education.map((edu, i) => (
              <Box
                key={i}
                mb={3}
                sx={{ backgroundColor: "#fff", p: 2, borderRadius: 2, boxShadow: 2 }}
              >
                <Typography variant="h6" fontWeight="600">
                  {edu.degree}
                </Typography>
                <Typography variant="subtitle2" color="secondary" fontWeight="600">
                  {edu.university} | {edu.duration}
                </Typography>
                <Typography variant="body2" mt={1} color="text.secondary">
                  {edu.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* تفکیک‌بخش‌ها */}
        <Divider sx={{ my: 5 }} />

        {/* مهارت‌ها */}
        <Box mb={5}>
          <Box display="flex" alignItems="center" mb={2}>
            <CodeIcon color="primary" fontSize="large" />
            <Typography variant="h5" fontWeight="bold" ml={1}>
              مهارت‌ها
            </Typography>
          </Box>
          <Stack spacing={2}>
            {skills.map((skill, i) => (
              <Box key={i}>
                <Typography variant="body1" mb={0.5}>
                  {skill.name}
                </Typography>
                <ColoredLinearProgress value={skill.level} />
              </Box>
            ))}
          </Stack>
        </Box>

        {/* زبان‌ها */}
        <Box>
          <Box display="flex" alignItems="center" mb={2}>
            <LanguageIcon color="secondary" fontSize="large" />
            <Typography variant="h5" fontWeight="bold" ml={1}>
              زبان‌ها
            </Typography>
          </Box>
          <Stack spacing={2}>
            {languages.map((lang, i) => (
              <Box key={i}>
                <Typography variant="body1" mb={0.5}>
                  {lang.name}
                </Typography>
                <ColoredLinearProgress value={lang.level} />
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
