import { useState, useRef } from "react";
import { Box, TextField, Button, Typography, Stack } from "@mui/material";
import Head from "next/head";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    try {
      const response = await fetch("https://formspree.io/f/xzzvbbnk", { method: "POST", headers: { Accept: "application/json" }, body: formData });
      if (response.ok) {
        setStatus("success");
        formRef.current.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" /> {/* فرم تماس نباید ایندکس بشه */}
      </Head>
      <Box sx={{ maxWidth: 600, mx: "auto", p: 3 }}>
        <form ref={formRef} onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField label="نام شما" name="name" variant="outlined" required fullWidth />
            <TextField label="ایمیل شما" name="email" type="email" variant="outlined" required fullWidth />
            <TextField label="پیام شما" name="message" variant="outlined" required fullWidth multiline rows={4} />
            <Button type="submit" variant="contained" color="primary" disabled={status === "sending"}>
              {status === "sending" ? "در حال ارسال..." : "ارسال پیام"}
            </Button>
            {status === "success" && <Typography color="success.main" align="center">پیام شما با موفقیت ارسال شد! ممنون از تماس شما.</Typography>}
            {status === "error" && <Typography color="error.main" align="center">متأسفانه مشکلی پیش آمد، لطفاً دوباره تلاش کنید.</Typography>}
          </Stack>
        </form>
      </Box>
    </>
  );
}