"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { DataProvider } from "@/contexts/DataContext";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

 const metadata: Metadata = {
  title: "read one piece manga",
  description: "app to read one manga anytime anywhere",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log("searching for.... ", searchText);
  }

  return (
    <DataProvider>
      <html lang="en">
      <body className={inter.className}>
      <GoogleAnalytics trackPageViews />
      <SpeedInsights />
        <Navbar searchText={searchText} showSearch={showSearch} setSearchText={setSearchText} setShowSearch={setShowSearch} handleSearch={handleSearch}/>
        {children}
      </body>
    </html>
    </DataProvider>
  );
}
