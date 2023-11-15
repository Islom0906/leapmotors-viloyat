import "@/styles/globals.css";
import Layout from "@/layout/layout";
import { HydrationProvider } from "react-hydration-provider";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../localization/i18n";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import NextNProgress from "nextjs-progressbar";
import "aos/dist/aos.css";
import { Provider, useDispatch } from "react-redux";
import store, { persistor } from "@/store";
import { PersistGate } from "redux-persist/integration/react";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

import { Inter } from "@next/font/google";

// const inter = Inter({
//   subsets: ["latin", "cyrillic"],
//   weight: ["400", "500", "600", "700"],
// });
//
export default function App({ Component, pageProps }) {
  // const {i18n} = useTranslation()
  // useEffect(() => {
  //     const getLang = localStorage.getItem('langLeap')
  //     if (!getLang) {
  //         localStorage.setItem('langLeap', 'ru')
  //     }
  //     i18n.changeLanguage(getLang)
  // }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HydrationProvider>
            <main >
              <Layout>
                <NextNProgress />
                <Component {...pageProps} />
              </Layout>
            </main>
          </HydrationProvider>
        </PersistGate>
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
    </QueryClientProvider>
  );
}
