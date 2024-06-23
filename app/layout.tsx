import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ReactNode } from "react";
import {CombinedProvider} from "@/providers";
import Header from "@/components/Header";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Developer Finder",
  description: "Help find Developers using different stuff",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <CombinedProvider>
          <Header />
          <NextTopLoader/>
          <div className="container mx-auto">{children}</div>
        </CombinedProvider>
      </body>
    </html>
  );
};
export default RootLayout;