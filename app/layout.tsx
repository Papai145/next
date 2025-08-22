import type { Metadata } from "next";
import { } from "next/font/google";
import "./globals.css";
import { JSX } from "react";
import './globals.css';
import HeaderLink from './header_link.svg';
import styles from './layout.module.css';

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
        <div className={styles.header}>
          <div>.my_blog</div>
          <button className={styles.header__btn}><HeaderLink/></button>
        </div>
        {children}
      </body>
    </html>
  );
}
