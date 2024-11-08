// src/app/layout.tsx
"use client";

import { useEffect, useState } from "react";
import localFont from "next/font/local";
import "./globals.css";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <html lang="pt-BR" className={theme === "dark" ? "theme-dark" : "theme-light"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <button
          onClick={toggleTheme}
          className="fixed top-20 right-0 bg-gray-700 text-white px-4 py-2 rounded-l-lg "
        >
          {theme === "dark" ? "🌞 Claro" : "🌙 Escuro"}
        </button>
        {children}
      </body>
    </html>
  );
}
