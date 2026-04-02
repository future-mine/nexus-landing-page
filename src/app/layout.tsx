import type { Metadata, Viewport } from "next";
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
  title: "Nexus — Next-Gen 3D Platform",
  description:
    "Experience the future of interactive 3D on the web. Built with cutting-edge WebGL technology for immersive, real-time experiences.",
  keywords: ["3D", "WebGL", "interactive", "platform", "real-time", "three.js"],
  openGraph: {
    title: "Nexus — Next-Gen 3D Platform",
    description:
      "Experience the future of interactive 3D on the web. Real-time rendering, interactive animations, and next-generation visual quality.",
    type: "website",
    locale: "en_US",
    siteName: "Nexus",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus — Next-Gen 3D Platform",
    description: "Experience the future of interactive 3D on the web.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
