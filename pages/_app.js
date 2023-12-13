import { useEffect } from 'react'
import { useRouter } from 'next/router'
import 'styles/globals.css'
import Layout from "components/layout"
import Script from 'next/script'
import * as gtag from "lib/gtag"

// Font Awesomeの設定
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on("routerChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routerChangeComplete", handleRouteChange)
    }
  }, [router.events])

  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`http://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag("js", new Date());
            
            gtag("config", "${gtag.GA_MEASUREMENT_ID}");
            `,
        }}
      />

      <Layout>
        {getLayout(<Component {...pageProps} />)}
      </Layout>
    </>
  )
}

export default MyApp
