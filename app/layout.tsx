import type { Metadata } from 'next';
import { ReactNode } from 'react';
import AuthProvider from '@/components/AuthProvider/AuthProvider';

export const metadata: Metadata = {
  title: 'NoteHub',
  description: 'Notes app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
