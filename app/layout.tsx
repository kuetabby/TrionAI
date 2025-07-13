import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import Provider from "./provider";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import { redHat } from "./utils/font";

import "./globals.css";

const app_title = "Trion AI";
const app_name = "Trion AI";
const description = "Powering the AI Sports Betting Revolution";

export const metadata: Metadata = {
  title: app_title,
  description,
  applicationName: app_name,
  keywords:
    "Blockchain, Connectivity, Decentralized Solutions, Community-Driven, Transparency, Security, Innovation",
  referrer: "origin-when-cross-origin",
  // metadataBase: new URL("https://ifritnetwork.com"),
  icons: {
    icon: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: app_name,
    description,
    images: ["/apple-touch-icon.png"],
  },
  openGraph: {
    type: "website",
    siteName: app_name,
    title: app_name,
    description: description,
    images: "/og-image.png",
  },
  category: "crypto dApp",
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${redHat.className} antialiased`}>
        <Provider>
          <AppBar />
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: "#333",
                color: "#fff",
              },
            }}
          />
          <main
            className="flex flex-col items-center"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#4A5568 #2D3748",
            }}
          >
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
