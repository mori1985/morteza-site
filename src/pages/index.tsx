import Head from "next/head";
import { useEffect } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Box,
  useMediaQuery,
  Container,
} from "@mui/material";
import "@fontsource/vazirmatn";
import Image from "next/image";

// کامپوننت‌ها
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Divider } from "@mui/material";

// تم سفارشی
const theme = createTheme({
  typography: {
    fontFamily: "Vazirmatn, sans-serif",
  },
  palette: {
    mode: "light",
    primary: { main: "#0066cc" },
    secondary: { main: "#ff4081" },
    background: { default: "#f5f5f5" },
  },
});

export default function Home() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>مرتضی محمودی | برنامه‌نویس فول‌استک وب - React, NestJS, PostgreSQL</title>
        <meta
          name="description"
          content="وب‌سایت شخصی مرتضی محمودی، برنامه‌نویس فول‌استک با تخصص در React، NestJS، Next.js، PostgreSQL، MongoDB، TypeScript و Tailwind CSS. رزومه و نمونه‌کارها."
        />
        <meta name="keywords" content="مرتضی محمودی, morteza mahmoudi, فول استک, توسعه دهنده وب, برنامه نویس وب, React, NestJS, Next.js, PostgreSQL, MongoDB, TypeScript, Tailwind CSS, فول‌استک دولوپر" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0066cc" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="مرتضی محمودی | برنامه‌نویس فول‌استک وب" />
        <meta property="og:description" content="نمونه‌کارها، رزومه و مهارت‌های مرتضی محمودی در حوزه توسعه وب با React و NestJS" />
        <meta property="og:url" content="https://morteza-mahmoudi-dev.ilarta.ir" />
        <meta property="og:image" content="https://morteza-mahmoudi-dev.ilarta.ir/images/banner.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="مرتضی محمودی | توسعه‌دهنده فول‌استک وب" />
        <meta name="twitter:description" content="رزومه و پروژه‌های برنامه‌نویسی React، NestJS، PostgreSQL و بیشتر." />
        <meta name="twitter:image" content="https://morteza-mahmoudi-dev.ilarta.ir/images/banner.png" />

        {/* Canonical */}
        <link rel="canonical" href="https://morteza-mahmoudi-dev.ilarta.ir" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "مرتضی محمودی",
              jobTitle: "Full Stack Web Developer",
              url: "https://morteza-mahmoudi-dev.ilarta.ir",
              image: "https://morteza-mahmoudi-dev.ilarta.ir/images/banner.png",
              sameAs: [
                "https://www.linkedin.com/in/morteza-mahmoudi-39899015a/",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "دانشگاه علم و صنعت ایران",
              },
              knowsAbout: [
                "React", "NestJS", "PostgreSQL", "MongoDB", "Next.js", "TypeScript", "Tailwind CSS", "Material UI"
              ],
            }),
          }}
        />
      </Head>

      {/* ساختار صفحه اصلی */}
      <Box component="main">
        <p>تست دیپلوی</p>
        <Box
          sx={{
            position: "sticky",
            top: 0,
            zIndex: (theme) => theme.zIndex.appBar,
            backgroundColor: "background.paper",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <Navbar />
        </Box>

        {/* Hero Section با تصویر */}
        <Box id="home" sx={{ py: 10, backgroundColor: "#fff", minHeight: isMobile ? "auto" : "100vh" }}>
          <Container maxWidth="md" sx={{ textAlign: "center" }}>
            <Image
              src="/images/banner.png"
              alt="مرتضی محمودی - توسعه‌دهنده وب"
              width={800}
              height={400}
              style={{
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                width: "80%",
                height: "auto",
              }}
            />
          </Container>
          <Hero />
        </Box>

        <Divider
          sx={{
            my: 6,
            borderColor: "#000",
            borderBottomWidth: "2px",
            width: "60%",
            mx: "auto",
            opacity: 0.2,
          }}
        />

        <Box sx={{ py: 10, backgroundColor: "#e3f2fd" }}>
          <AboutMe />
        </Box>
        <Divider
          sx={{
            my: 6,
            borderColor: "#000",
            borderBottomWidth: "2px",
            width: "60%",
            mx: "auto",
            opacity: 0.2,
          }}
        />
        <Box sx={{ py: 10, backgroundColor: "#e0f7fa" }}>
          <Projects />
        </Box>
        <Divider
          sx={{
            my: 6,
            borderColor: "#000",
            borderBottomWidth: "2px",
            width: "60%",
            mx: "auto",
            opacity: 0.2,
          }}
        />
        <Box sx={{ py: 10, backgroundColor: "#f0f0f0" }}>
          <Resume />
        </Box>
        <Divider
          sx={{
            my: 6,
            borderColor: "#000",
            borderBottomWidth: "2px",
            width: "60%",
            mx: "auto",
            opacity: 0.2,
          }}
        />
        <Box sx={{ py: 10, backgroundColor: "#e3f2fd" }}>
          <Contact />
        </Box>
        <Divider sx={{ my: 6, borderColor: "#333", opacity: 0.2 }} />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}