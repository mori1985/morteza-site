import { Box, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 1, px: 1, backgroundColor: "#111", color: "#fff", textAlign: "center", fontSize: "0.75rem" }}>
      <Typography variant="body2" sx={{ fontSize: "0.75rem", mb: 0.5 }}>
        ساخته‌شده توسط <Link href="/" color="inherit" underline="hover">مرتضی محمودی</Link>
      </Typography>
      <Typography variant="caption" sx={{ fontSize: "0.7rem", color: "#aaa" }}>
        © {new Date().getFullYear()} تمامی حقوق محفوظ است.
      </Typography>
    </Box>
  );
}