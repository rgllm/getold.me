import React from 'react';

import '@/styles/globals.css';
import { AnalyticsWrapper } from './Analytics';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>GetOld.Me</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="80 years old you with the power of AI. Upload a photo and check out how you will look."
        />
        <meta property="og:site_name" content="getold.me" />
        <meta
          property="og:description"
          content="80 years old you with the power of AI. Upload a photo and check out how you will look."
        />
        <meta property="og:title" content="Get Old Me" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get Old Me" />
        <meta
          name="twitter:description"
          content="80 years old you with the power of AI. Upload a photo and check out how you will look."
        />
        <meta property="og:image" content="https://getold.me/og-image.png" />
        <meta name="twitter:image" content="https://getold.me/og-image.png" />
      </head>
      <body className="overflow-y-scroll">
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
