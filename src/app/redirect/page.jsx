"use client";
import Box from "@mui/system/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://wa.me/3513924836';
    }, 5000);

    return () => clearTimeout(timer);
  }, [window.location.href]);

  return (
    <Stack alignItems="center" sx={{ background: "#a79690", height: "100vh" }}>
      <Stack
        direction="column"
        justifyContent="center"
        sx={{
          maxWidth: 540,
          width: "100%",
          position: "relative",
          background: "#bcaaa4",
          height: "95%",
        }}
      >
        <Box sx={{ width: "100%", height: "100%", maxWidth: 540 }}>
          <Card sx={{ borderRadius: 0, backgroundColor: "#b2a9b3", height: "100%" }} variant="plain">
            <CardContent sx={{ justifyContent: "center", alignItems: 'center', height: "100%", textAlign: "center" }}>
              <Stack alignItems="center" justifyContent="center" spacing={2}>
                <Typography level="h4" textColor="neutral.200">
                  Te estamos redirigiendo a WhatsApp...
                </Typography>
                <Box
                  component="img"
                  src="happy-phone.svg"
                  alt=""
                  sx={{ width: "100%", maxWidth: "100%", height: "auto", maxHeight: "70%" }}
                />
                <Typography level="title-sm" textColor="neutral.200" padding={2}>
                  ¡Agendame para ver todos los productos que tengo disponibles en mis estados!
                </Typography>
                <Typography level="body-xs" textColor="neutral.200">
                  Si no te redirige en 5 segundos podes <a href="https://wa.me/3513924836">tocar acá</a>
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Stack>
    </Stack>

  );
};

export default Page;
