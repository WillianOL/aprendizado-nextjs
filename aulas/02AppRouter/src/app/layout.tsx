import type { Metadata } from 'next';
import './globals.css';
import Menu from '@/components/menu';

export const metadata: Metadata = {
  title: 'Willdev Next',
  description: 'Criado por Willian',
};

// O arquivo layout é o arquivo onde fica os elementos que são
// mostrados em toda a página e o html e o body
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
