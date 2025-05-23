import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "@/styles/globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
import Layout from "@/components/common/Layout";
import Head from "next/head";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "왓챠피디아",
  description: "Watchapedia Clone Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Head>
          <title>왓챠피디아 클론</title>
          <meta
            name="description"
            content="왓챠피디아 클론 - 영화, TV 프로그램, 책, 웹툰 정보와 평가"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Layout>{children}</Layout>
        </main>
      </body>
    </html>
  );
}
