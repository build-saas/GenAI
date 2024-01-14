import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ModelProvider } from "@/components/model-provider";
import { ToasterProvider } from "@/components/toast-provider";
import { CrispProvider } from "@/components/crisp-provider";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genai",
  description: "AI SAAS platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider />
        <body className={inter.className}>
          <ToasterProvider />
          <ModelProvider />
          {children}
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
