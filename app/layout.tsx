import type { Metadata } from "next";
import { } from "next/font/google";
import "./globals.css";
import { JSX } from "react";
import './globals.css';

  export const metadata: Metadata = {
  title: "Мой проект на Nest",
  description: "Проект на несте.Домашнее задание",
};  

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>):JSX.Element {
  return (
    <html lang="ru">
      <body >
        {children}
      </body>
    </html>
  );
}
