import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Providers
import { Providers } from "./providers";

// Custom components
import CustomNavBar from "@/components/CustomNavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Viksit Bharath",
  description: "India's Vision for 2047",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased `}
    >
      <body className="h-screen w-full">
        <Providers>
          <CustomNavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
