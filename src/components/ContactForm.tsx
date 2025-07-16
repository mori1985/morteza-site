// src/components/ContactForm.tsx
import { useState, useRef } from "react";
import { Box, TextField, Button, Typography, Stack } from "@mui/material";

export default function ContactForm() {
  // وضعیت ارسال فرم: idle (اولیه)، sending (در حال ارسال)، success (موفق)، error (خطا)
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  
  // ایجاد ref برای فرم جهت کنترل مستقیم DOM فرم
  const formRef = useRef<HTMLFormElement>(null);

  // تابع ارسال فرم
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // جلوگیری از رفتار پیش‌فرض مرورگر (رفرش صفحه)
    setStatus("sending"); // تغییر وضعیت به در حال ارسال

    if (!formRef.current) return; // اگر ref فرم در دسترس نیست، تابع را متوقف کن

    // گرفتن داده‌های فرم از طریق ref
    const formData = new FormData(formRef.current);

    try {
      // ارسال داده‌ها به Formspree
      const response = await fetch("https://formspree.io/f/xzzvbbnk", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setStatus("success"); // ارسال موفق
        formRef.current.reset(); // ریست کردن فرم با استفاده از ref
      } else {
        setStatus("error"); // خطا در ارسال
      }
    } catch (error) {
      setStatus("error"); // خطا در درخواست (مثلا قطع اینترنت)
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", p: 3 }}>
      <form ref={formRef} onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            label="نام شما"
            name="name"
            variant="outlined"
            required
            fullWidth
          />
          <TextField
            label="ایمیل شما"
            name="email"
            type="email"
            variant="outlined"
            required
            fullWidth
          />
          <TextField
            label="پیام شما"
            name="message"
            variant="outlined"
            required
            fullWidth
            multiline
            rows={4}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={status === "sending"}
          >
            {status === "sending" ? "در حال ارسال..." : "ارسال پیام"}
          </Button>

          {status === "success" && (
            <Typography color="success.main" align="center">
              پیام شما با موفقیت ارسال شد! ممنون از تماس شما.
            </Typography>
          )}
          {status === "error" && (
            <Typography color="error.main" align="center">
              متأسفانه مشکلی پیش آمد، لطفاً دوباره تلاش کنید.
            </Typography>
          )}
        </Stack>
      </form>
    </Box>
  );
}
