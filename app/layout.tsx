import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apexitse.com"),
  title: "Apexitse - Apex Itse Nig Ltd | Premium Interior & Exterior Finishing Nigeria",
  description:
    "Apex Itse Nig Ltd. is Nigeria's leading architectural finishing & structural metal fabrication firm established in 2013. Specializing in Alucobond ACP cladding, frameless glass curtain walls, acoustic interior fitouts & structural metalwork in Abuja and across West Africa.",
  keywords: [
    "Apexitse",
    "Apex Itse Nig Ltd",
    "Interior finishing Abuja",
    "Exterior ACP cladding Nigeria",
    "Alucobond cladding Abuja",
    "Frameless glass balustrades",
    "Metal fabrication Abuja",
    "Curtain wall installation",
    "Commercial office fitout Nigeria"
  ],
  openGraph: {
    title: "Apexitse - Apex Itse Nig Ltd | Premium Architectural Finishing Nigeria",
    description: "Nigeria's leading architectural finishing & structural metal fabrication firm established in 2013 in Abuja.",
    url: "https://apexitse.com",
    siteName: "Apex Itse Nig Ltd",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Apexitse Interior & Exterior Finishing Nigeria"
      }
    ],
    locale: "en_NG",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Apexitse - Apex Itse Nig Ltd | Premium Architectural Finishing",
    description: "Nigeria's leading architectural finishing & structural metal fabrication firm in Abuja.",
    images: ["/og-image.jpeg"]
  },
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#060b17] text-slate-100 selection:bg-[#CA3333] selection:text-white">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
