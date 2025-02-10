import type { Metadata } from "next";
import CustomCursor from "@/components/custom-cursor";
import localFont from "next/font/local";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-vertical-timeline-component/style.min.css";
import "./globals.css";

const product_sans = localFont({
  src: [
    {
      path: "../../public/fonts/ProductSans-Thin.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/ProductSans-Light.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/ProductSans-Regular.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/ProductSans-Bold.ttf",
      weight: "800",
    },
    {
      path: "../../public/fonts/ProductSans-Black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-pro",
});

export const metadata: Metadata = {
  title: "PrimeVista",
  description: "Accounts & Tax Outsourcing Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${product_sans.variable} antialiased bg-neutral-50 font-prosan`}
      >
        <>
          <CustomCursor />

          {children}
        </>
      </body>
    </html>
  );
}
