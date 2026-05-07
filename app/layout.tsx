import type {Metadata} from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Firemný Rozcestník',
  description: 'Portfólio firmy s hliníkovými bránami a inžinierskou činnosťou',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="sk">
      <body className={`${montserrat.variable} font-sans antialiased`} suppressHydrationWarning>{children}</body>
    </html>
  );
}
