import React, { ReactNode, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Watcha Pedia Clone</title>
        <meta name="description" content="Watcha Pedia Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
