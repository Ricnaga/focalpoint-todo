import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.scss";

const interTight = Inter_Tight({
  display: "swap",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FocalPoint",
  description: "Todo list with Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={interTight.className}>
      <body>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
