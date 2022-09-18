import "../styles/globals.css"
import type { AppProps } from "next/app"
import { NextPage } from "next"
import { ReactNode } from "react"
import { ReactElement } from "react"
import AppWrapper from "src/common/application/AppWrapper"
import Head from "next/head"
import MouseContextProvider from "src/component/MouseContext"

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <>
      {getLayout(
        <>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=0.1, width=device-width"
            />
          </Head>
          <MouseContextProvider>
            <AppWrapper>
              <Component {...pageProps} />
            </AppWrapper>
          </MouseContextProvider>
        </>
      )}
    </>
  )
}

export default App
