import type { Metadata } from 'next';
import { } from 'next/font/google';
import './globals.css';
import type { JSX } from 'react';
import './globals.css';
import styles from './layout.module.css';
import HeaderLinkSvg from '@/components/headerLinkSvg/headerLink';
import { LinkProvider } from '@/context/LinkContext';

export const metadata: Metadata = {
  title: 'Мой проект на Nest',
  description: 'Проект на несте.Домашнее задание',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="ru">
      <body >
        <LinkProvider>
          <div className={styles.header}>
            <div>.my_blog</div>
            <HeaderLinkSvg />
          </div>
        </LinkProvider>
        {children}
      </body>
    </html>
  );
}