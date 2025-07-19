import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { roboto } from "@/utils/fonts";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Resume - GC",
  description: "Gabriel Cavalcante's official online resume.",
  authors: [
    {
      name: "Gabriel Cavalcante de Jesus Oliveira",
      url: "https://github.com/zolppy",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>{children}</body>
       <GoogleAnalytics gaId="G-FMM9C4CFJR" />
    </html>
  );
}

RootLayout.displayName = "RootLayout";
