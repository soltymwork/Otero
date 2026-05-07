import type {Metadata} from 'next';
import { Montserrat, Archivo_Black } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-archivo-black',
});

export const metadata: Metadata = {
  title: 'Firemný Rozcestník',
  description: 'Portfólio firmy s hliníkovými bránami a inžinierskou činnosťou',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="sk">
      <body className={`${montserrat.variable} ${archivoBlack.variable} font-sans antialiased`} suppressHydrationWarning>{children}</body>
    </html>
  );
}
