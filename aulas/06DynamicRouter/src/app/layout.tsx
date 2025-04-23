import type { Metadata } from 'next';
import './globals.css';
import Menu from '@/components/menu';

export const metadata: Metadata = {
  title: 'Willdev Next',
  description: 'Criado por Willian',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
