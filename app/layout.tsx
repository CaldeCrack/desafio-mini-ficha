import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mini Ficha",
  description: "Desafío Mini Ficha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
	  <head>
	  	<link href="https://fonts.googleapis.com/css2?family=Tilt+Warp" rel="stylesheet"></link>
	  	<link href="https://fonts.googleapis.com/css2?family=Poppins" rel="stylesheet"></link>
	  	<link href="https://fonts.googleapis.com/css2?family=Overpass" rel="stylesheet"></link>
	  </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
