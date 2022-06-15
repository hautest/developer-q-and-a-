import GlobalLayout from "../components/GlobalLayout/GlobalLayout";
import "../styles/global.css";
import { themeClass } from "../styles/theme.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}

export default MyApp;
