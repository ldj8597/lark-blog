import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Lark Blog</title>
      </Head>
      <Header className="max-w-4xl mx-auto px-4" />
      <main className="max-w-4xl mx-auto px-4 pb-20">{children}</main>
    </>
  );
}
