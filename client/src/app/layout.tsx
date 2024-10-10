import type {Metadata} from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';
import {Toaster} from 'sonner';

export const metadata: Metadata = {
  title: 'Book-Store',
  description: 'Browse books, add to your favorites, add to cart and purchase'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='text-white'>
        <Providers>
          <Toaster position='top-center' richColors visibleToasts={2} />
          <Header />
          <main className='px-5 sm:px-10'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
