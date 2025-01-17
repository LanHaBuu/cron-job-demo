import { AppPropsWithLayout } from "@/models";
import { MainLayout } from "@/components/layout";
import { DefaultSeo } from "next-seo";
import { alegreyaSans } from "@/fonts";
import "@/styles/globals.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import { SEO } from "../../next-seo.config";

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component?.Layout || MainLayout;

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${alegreyaSans.style.fontFamily};
        }
      `}</style>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
