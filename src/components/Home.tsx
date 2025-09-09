"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";

const images = [
  "/images/slide1.webp",
  "/images/slide2.webp",
  "/images/slide3.webp",
  "/images/slide4.webp",
  "/images/slide5.webp",
];

const HomeSlider = () => {
  return (
    <Box
      component="section"
      id="gallery"
      sx={{ py: 8, textAlign: "center", bgcolor: "#f5f5f5" }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#0066cc", mb: 4 }}
        >
          گالری نمونه‌کارها
        </Typography>

        <Swiper
          dir="rtl"
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation
          loop
          style={{
            paddingBottom: "40px",
            "--swiper-navigation-color": "#0066cc",
            "--swiper-pagination-color": "#0066cc",
            "--swiper-pagination-bullet-inactive-color": "#999",
            "--swiper-pagination-bullet-inactive-opacity": "0.5",
          } as React.CSSProperties}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                  position: "relative",
                  aspectRatio: "3/2",
                  maxWidth: "800px",
                  mx: "auto",
                }}
              >
                <Image
                  src={src}
                  alt={`slide-${index}`}
                  fill
                  style={{ objectFit: "cover" }}
                  priority={index === 0}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default HomeSlider;
