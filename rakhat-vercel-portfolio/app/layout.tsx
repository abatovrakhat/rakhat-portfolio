import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rakhat Abatov | Product / Data Analyst',
  description: 'Portfolio website for Rakhat Abatov — Product / Data Analyst.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
