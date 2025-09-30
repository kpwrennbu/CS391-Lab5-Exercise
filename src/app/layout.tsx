// TODO(1): import AntD reset css

import type { Metadata } from 'next';
import React from 'react';

import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Student Enpmxercise',
  description: 'Next.js + AntD Exercise',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* TODO(2): add a header with links to Home and About (use <Link>) */}
        {children}
      </body>
    </html>
  );
}
