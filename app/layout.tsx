import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import rawData from "@/data/templates.json";
import { PetTemplateData, ThemeFontVariables } from "@/types/templates.types";
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
});


const templateData: PetTemplateData = rawData;
const sectionData = templateData.categories.Pet.sections;
const fontVariables: ThemeFontVariables = {
  '--font-primary': templateData.common.theme.fonts.primary,
  '--font-heading': templateData.common.theme.fonts.heading,
  '--font-navigation': templateData.common.theme.fonts.navigation,
};

export const metadata: Metadata = {
  title: templateData.common.metadata.title,
  description: templateData.common.metadata.description,
  icons: {
    icon: templateData.common.metadata.icon,
    shortcut: templateData.common.metadata.icon,
    apple: templateData.common.metadata.icon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${cormorant.variable} flex min-h-screen flex-col font-sans antialiased`} style={fontVariables}>
        <Header data={sectionData.Header?.variants?.PetHeader2} />
        {children}
        <Footer data={templateData.common.Footer} />
      </body>
    </html>
  );
}
