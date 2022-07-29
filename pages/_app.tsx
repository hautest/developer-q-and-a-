import GlobalLayout from "../components/GlobalLayout/GlobalLayout";
import "../styles/global.css";
import { useSize } from "../hook/useSize";
import type { AppProps } from "next/app";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const { height } = useSize();
  useEffect(() => {
    const display = document.getElementById("__next");
    if (!height || !display) return;
    document.body.style.height = `${height}px`;
    display.style.height = `${height}px`;
  }, [height]);
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}

export default MyApp;
