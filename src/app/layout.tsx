import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['200', '400', '500', '600', '800']
});

export const metadata: Metadata = {
  title: "ForthTech",
  description: "The Tech-solutions",
  openGraph: {
    siteName: "FothTech",
    type: "website",
    title: "FothTech",
    description: "The community which provide the very cool services",
    locale: "en",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, process.env.NODE_ENV === "development" && "debug-screens")}>{children}</body>
    </html>
  );
}
