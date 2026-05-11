import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ayoub Bouz | AI Engineer & Data Scientist",
  description:
    "Portfolio of Ayoub Bouz — AI Engineer and Data Scientist with 5+ years building LLM systems, ML models, geospatial analytics, and big data pipelines on Python, SQL, and cloud (AWS, Azure, GCP).",
  keywords: [
    "Ayoub Bouz",
    "AI Engineer",
    "Data Scientist",
    "Machine Learning Engineer",
    "LLM Engineer",
    "Python Developer",
    "Data Engineer",
    "MLOps",
    "Casablanca",
    "Morocco",
  ],
  authors: [{ name: "Ayoub Bouz" }],
  openGraph: {
    title: "Ayoub Bouz | AI Engineer & Data Scientist",
    description:
      "AI Engineer & Data Scientist — building intelligent systems with LLMs, machine learning, and big data on cloud-native stacks.",
    url: "https://ayoubbouz.me",
    siteName: "Ayoub Bouz Portfolio",
    images: [
      {
        url: "/Website-overview.png",
        width: 1200,
        height: 630,
        alt: "Ayoub Bouz Portfolio Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayoub Bouz | AI Engineer & Data Scientist",
    description:
      "Building intelligent systems with LLMs, ML, and big data on cloud.",
    images: ["/Website-overview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="text-white">
          <div className="container">{children}</div>
        </main>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
