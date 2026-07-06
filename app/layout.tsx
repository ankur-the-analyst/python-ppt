import type {Metadata} from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'HANDS-ON PYTHON TOOL',
  description: 'Interactive Python Learning Experience Program (TLEP)',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-slate-50 text-slate-900 antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
