import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap"
});

export const metadata: Metadata = {
  title: "AlaRuta | Tu movimiento empieza aquí",
  description:
    "Track your runs, discover routes, join local events, and connect with the AlaRuta community across Latin America.",
  icons: {
    icon: "/er-logo.png",
    apple: "/er-logo.png"
  },
  openGraph: {
    title: "AlaRuta | Tu movimiento empieza aquí",
    description:
      "Track your runs, discover routes, and connect with your community.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
