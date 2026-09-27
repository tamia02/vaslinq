import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import "./lux.css";
import LuxNav from "@/components/lux/LuxNav";
import LuxFooter from "@/components/lux/LuxFooter";
import Preloader from "@/components/lux/motion/Preloader";
import SmoothScroll from "@/components/lux/motion/SmoothScroll";
import ScrollBar from "@/components/lux/motion/ScrollBar";
import { WHATSAPP } from "@/components/lux/links";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vaslix.com"),
  title: "Vaslix | Custom Software & AI Automation Studio",
  description: "Vaslix builds custom software, AI chat & voice agents and business automation for ambitious brands worldwide.",
  openGraph: {
    siteName: "Vaslix",
    type: "website",
    images: ["/og.png"],
  },
};

// Runs before paint: skip the intro curtain for visitors who already saw it
// this session, so it never flashes on reloads.
const introScript = `try{if(sessionStorage.getItem("vx-intro"))document.documentElement.dataset.intro="seen"}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${instrument.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="lux min-h-full flex flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-white">
          Skip to content
        </a>
        <Preloader />
        <SmoothScroll />
        <ScrollBar />
        <LuxNav />
        <main id="main" className="relative flex-1 overflow-x-clip">
          {children}
        </main>
        <LuxFooter />
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="fixed bottom-5 right-5 z-[60] grid h-14 w-14 place-items-center rounded-full bg-[#25D366] shadow-[0_12px_32px_-8px_rgba(37,211,102,0.6)] transition-transform hover:scale-110 active:scale-95 sm:bottom-8 sm:right-8"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
            <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43 2.52 0 4.89.99 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.24 9.43-9.44 9.43m8.03-17.46A11.3 11.3 0 0 0 12.05.7C5.8.7.7 5.8.7 12.05c0 2 .52 3.95 1.52 5.66L.6 23.6l6.03-1.58a11.3 11.3 0 0 0 5.42 1.38h.01c6.26 0 11.35-5.1 11.35-11.35 0-3.03-1.18-5.88-3.33-8.02" />
          </svg>
        </a>
      </body>
    </html>
  );
}
