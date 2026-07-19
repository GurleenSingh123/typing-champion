import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Typing Champion - Free Online Typing Test",
  description:
    "Practice typing online for free. Improve your typing speed, accuracy, and WPM with Typing Champion.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* <script src="https://quge5.com/88/tag.min.js" data-zone="261392" async data-cfasync="false"></script> */}

        <Script src="https://quge5.com/88/tag.min.js" strategy="afterInteractive" data-zone="261392" data-cfasync="false"/>ṇ

        <meta name="monetag" content="00ed739fa4b175dd11749637bf1ae5df"></meta>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FJ71DCKT91"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FJ71DCKT91');
          `}
        </Script>
      </head>

      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}