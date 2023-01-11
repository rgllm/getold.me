import '@/styles/globals.css';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>GetOld.Me</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Check out how you will look in your 80's."
        />
        <meta property="og:site_name" content="getold.me" />
        <meta
          property="og:description"
          content="Check out how you will look in your 80's"
        />
        <meta property="og:title" content="Get Old Me" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Get Old Me" />
        <meta
          name="twitter:description"
          content="Check out how you will look in your 80's"
        />
      </head>
      <body className="overflow-y-scroll">{children}</body>
    </html>
  );
}
