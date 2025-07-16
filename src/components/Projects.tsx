"use client";

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
import CodeIcon from "@mui/icons-material/Code";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion } from "framer-motion";

const projects = [
  {
    title: "سامانه مدیریت مسافرین",
    description:
      "سامانه ثبت و مدیریت اطلاعات ۳۰هزار مسافر اربعین، شامل فرم رزرو، تخصیص اتوبوس، و ارسال پیامک.",
    technologies: ["React", "NestJS", "PostgreSQL", "Prisma", "Tailwind"],
    demo: "http://qazvin-rah-mosafer.ir",
  },
  {
    title: "دفترچه تلفن سازمانی",
    description:
      "اپلیکیشن مدیریت مخاطبین با امکان جستجو، فیلتر و دسته‌بندی، طراحی شده برای استفاده داخلی سازمان‌ها.",
    technologies: ["React", "JSON Server", "Material UI"],
    demo: "https://qazvin-rah-phbook.ilarta.ir",
  },
  {
    title: "نسخه فعلی سایت شخصی",
    description:
      "وب‌سایت شخصی طراحی‌شده با Next.js و Material UI برای نمایش رزومه و نمونه‌کارها.",
    technologies: ["Next.js", "Material UI", "TypeScript", "Vazirmatn"],
    demo: "http://localhost:3000",
  },
  {
    title: "نسخه قدیمی سایت شخصی",
    description:
      "اولین نسخه از وب‌سایت شخصی با طراحی ساده و استفاده از React و Material UI.",
    technologies: ["React", "Material UI", "React Router"],
    demo: "https://morteza-mahmoudi.ilarta.ir/",
  },
];

const techColorMap: Record<string, string> = {
  React: "#61dafb",
  NestJS: "#e0234e",
  PostgreSQL: "#336791",
  Prisma: "#0c344b",
  Tailwind: "#38b2ac",
  "Material UI": "#007fff",
  "JSON Server": "#ff6347",
  "Next.js": "#000000",
  TypeScript: "#3178c6",
  "React Router": "#ca4245",
  Vazirmatn: "#5a5a5a",
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
  }),
};


export default function Projects() {
  return (
    <Box id="projects" sx={{ py: 8 }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        gutterBottom
        sx={{
          background: "linear-gradient(90deg, #0066cc, #00b0ff, #0066cc)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          userSelect: "none",
        }}
      >
        پروژه‌ها
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          mt: 4,
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
          >
            <Card
              elevation={8}
              sx={{
                width: { xs: 300, sm: 360 },
                height: 340,
                backgroundColor: "#151dcf",
                color: "#fff",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "translateY(-5px)" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {project.description}
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {project.technologies.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      icon={<CodeIcon />}
                      size="small"
                      sx={{
                        backgroundColor: techColorMap[tech] || "#ccc",
                        color: "#fff",
                        fontWeight: "bold",
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>

              <CardActions
                sx={{ px: 2, pb: 2, justifyContent: "space-between" }}
              >
              
                <Button
                  size="small"
                  href={project.demo}
                  target="_blank"
                  variant="contained"
                  sx={{
                    backgroundColor: "#fff",
                    color: "#151dcf",
                    "&:hover": {
                      backgroundColor: "#e0f7fa",
                    },
                  }}
                  endIcon={<LaunchIcon />}
                >
                  دمو
                </Button>
              </CardActions>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
