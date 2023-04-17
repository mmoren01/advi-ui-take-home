import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider } from '@emotion/react'
import * as React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline'

import theme from '../src/theme'
import createEmotionCache from '../src/theme/createEmotionCache'
import Layout from '../src/components/layout'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}