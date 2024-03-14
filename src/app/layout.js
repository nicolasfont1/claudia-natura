import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/store/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clau-tálogo de Natura",
  description: "Catálogo de productos Natura de la Seño Claudia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="theme-color" content="#dde8ee" />
      <Providers>
        <body className={inter.className} style={{ margin: 0 }}>{children}</body>
      </Providers>
    </html>
  );
}
