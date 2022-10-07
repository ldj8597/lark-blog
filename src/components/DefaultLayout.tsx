import Head from "next/head";
import { ReactNode } from "react";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Lark Blog</title>
      </Head>
      <header>
        <p>This is header</p>
      </header>
      <main>{children}</main>
    </>
  );
}
