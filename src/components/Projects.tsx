import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import Head from "next/head";
import CodeIcon from "@mui/icons-material/Code";
import LaunchIcon from "@mui/icons-material/Launch";

const projects = [
  {
    title: "سامانه مدیریت مسافرین",
    description:
      "سامانه ثبت و مدیریت اطلاعات ۳۰هزار مسافر اربعین، شامل فرم رزرو، تخصیص اتوبوس، و ارسال پیامک.",
    technologies: ["React", "NestJS", "PostgreSQL", "Prisma", "Tailwind"],
    demo: null,
  },
  {
    title: "دفترچه تلفن سازمانی",
    description:
      "اپلیکیشن مدیریت مخاطبین با امکان جستجو، فیلتر و دسته‌بندی، برای استفاده داخلی سازمان‌ها.",
    technologies: ["React", "JSON Server", "Material UI"],
    demo: null,
  },
  {
    title: "نسخه فعلی سایت شخصی",
    description:
      "وب‌سایت شخصی با Next.js و Material UI برای نمایش رزومه و نمونه‌کارها.",
    technologies: [
      "Next.js",
      "Google Search Console",
      "robots.txt",
      "SEO Tools",
      "Material UI",
      "TypeScript",
      "Vazirmatn",
    ],
    demo: null,
  },
  {
    title: "وب‌سایت شخصی سفارشی",
    description:
      "طراحی و توسعه وب‌سایت شخصی با UI/UX مدرن و ریسپانسیو برای مشتریان.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    demo: null,
  },
  {
    title: "بهینه‌سازی SEO سایت",
    description:
      "بهینه‌سازی موتور جستجو با تنظیمات متا تگ‌ها، Sitemap، و ریدایرکت‌ها.",
    technologies: ["Next.js", "Google Search Console", "robots.txt", "SEO Tools"],
    demo: null,
  },
  {
    title: "کانفیگ سرورهای ابری",
    description:
      "پیکربندی سرورهای ابری برای میزبانی پروژه‌ها با Nginx و Docker.",
    technologies: ["Nginx", "Docker", "AWS", "DigitalOcean"],
    demo: null,
  },
  {
    title: "دیتابیس‌های PostgreSQL و MongoDB",
    description:
      "طراحی و مدیریت دیتابیس‌ها با مهاجرت داده و بهینه‌سازی کوئری‌ها.",
    technologies: ["PostgreSQL", "MongoDB", "Prisma", "Node.js"],
    demo: null,
  },
  {
    title: "داشبورد React",
    description:
      "ساخت داشبورد تعاملی با چارت‌ها و فیلترهای زنده برای مانیتورینگ داده‌ها.",
    technologies: ["React", "Chart.js", "Material UI", "Redux"],
    demo: null,
  },
  {
    title: "طراحی قالب سایت",
    description:
      "طراحی قالب‌های سفارشی و ریسپانسیو برای وب‌سایت‌های تجاری و شخصی.",
    technologies: ["HTML", "CSS", "Tailwind CSS", "Figma"],
    demo: null,
  },
];

const techColorMap: Record<
  | "React"
  | "NestJS"
  | "PostgreSQL"
  | "Prisma"
  | "Tailwind"
  | "Material UI"
  | "JSON Server"
  | "Next.js"
  | "TypeScript"
  | "Vazirmatn"
  | "Google Search Console"
  | "robots.txt"
  | "SEO Tools"
  | "Nginx"
  | "Docker"
  | "AWS"
  | "DigitalOcean"
  | "Chart.js"
  | "Redux"
  | "HTML"
  | "CSS"
  | "Figma"
  | "MongoDB"
  | "Node.js",
  string
> = {
  React: "#00c4cc",
  NestJS: "#ff4081",
  PostgreSQL: "#42a5f5",
  Prisma: "#26a69a",
  Tailwind: "#4caf50",
  "Material UI": "#2196f3",
  "JSON Server": "#ff5722",
  "Next.js": "#673ab7",
  TypeScript: "#3f51b5",
  Vazirmatn: "#9e9e9e",
  "Google Search Console": "#0288d1",
  "robots.txt": "#4dd0e1",
  "SEO Tools": "#80deea",
  Nginx: "#2ecc71",
  Docker: "#3498db",
  AWS: "#ffca28",
  DigitalOcean: "#039be5",
  "Chart.js": "#ef5350",
  Redux: "#ab47bc",
  HTML: "#f44336",
  CSS: "#3f51b5",
  Figma: "#1de9b6",
  "MongoDB": "#2e7d32",
  "Node.js": "#8bc34a",
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>پروژه‌های مرتضی محمودی | توسعه‌دهنده وب</title>
        <meta name="description" content="نمونه‌کارهای مرتضی محمودی شامل سامانه مدیریت مسافرین، دفترچه تلفن سازمانی و وب‌سایت‌های سفارشی با React و Next.js" />
        <meta name="keywords" content="پروژه‌های برنامه‌نویسی, React, Next.js, NestJS, PostgreSQL, نمونه‌کار" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="پروژه‌های مرتضی محمودی" />
        <meta property="og:description" content="مشاهده پروژه‌های حرفه‌ای توسعه وب با React، Next.js و NestJS" />
        <meta property="og:url" content="https://morteza-mahmoudi-dev.ilarta.ir/projects" />
        <meta property="og:image" content="https://morteza-mahmoudi-dev.ilarta.ir/images/projects-banner.png" />
      </Head>
      <Box id="projects" sx={{ py: 6, backgroundColor: "#f5f5f5" }}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom sx={{ color: "#2e7d32", textShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)", mb: 4 }}>
          پروژه‌ها
        </Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }, gap: 4, px: { xs: 2, md: 4 } }}>
          {projects.map((project, index) => (
            <Card key={index} elevation={4} sx={{ backgroundColor: "#fff", borderRadius: 2, height: 360, transition: "transform 0.3s ease", "&:hover": { transform: "scale(1.03)", boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)" } }}>
              <CardContent sx={{ p: 2, flexGrow: 1 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>{project.title}</Typography>
                <Typography variant="body2" sx={{ mb: 2, color: "#757575" }}>{project.description}</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 1 }}>
                  {project.technologies.map((tech, i) => (
                    <Chip key={i} label={tech} icon={<CodeIcon />} size="small" sx={{ backgroundColor: techColorMap[tech as keyof typeof techColorMap] || "#e0e0e0", color: "#fff", fontWeight: "bold", "& .MuiChip-icon": { color: "#fff" }, mb: 0.5 }} />
                  ))}
                </Stack>
              </CardContent>
              <CardActions sx={{ p: 2, justifyContent: "flex-end" }}>
                {project.demo && (
                  <Button size="small" href={project.demo} target="_blank" variant="contained" sx={{ backgroundColor: "#2e7d32", color: "#ffffff", "&:hover": { backgroundColor: "#388e3c" } }} endIcon={<LaunchIcon />}>
                    دمو
                  </Button>
                )}
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
}