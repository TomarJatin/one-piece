"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { ThemeProvider } from "@/contexts/Theme";

const inter = Inter({ subsets: ["latin"] });

 const metadata: Metadata = {
  title: "Manga18",
  description: "app to read manga anytime anywhere",
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
    <ThemeProvider>
      <html lang="en">
      <body className={inter.className}>
        <Navbar searchText={searchText} showSearch={showSearch} setSearchText={setSearchText} setShowSearch={setShowSearch} handleSearch={handleSearch}/>
        {children}
      </body>
    </html>
    </ThemeProvider>
  );
}
