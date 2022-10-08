import "../styles/globals.css";
import type { AppProps, AppType } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import DefaultLayout from "~/components/layout/DefaultLayout";
import { trpc } from "~/utils/trpc";

export type NextPageWithLayout<
  TProps = Record<string, unknown>,
  TInitialProps = TProps
> = NextPage<TProps, TInitialProps> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = (({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);
  return getLayout(<Component {...pageProps} />);
}) as AppType;

export default trpc.withTRPC(MyApp);
