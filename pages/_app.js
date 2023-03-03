import '@/styles/globals.css'
import { StoreProvider } from '@/utils/Store'

export default function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>

      <Component {...pageProps} />

    </StoreProvider>)

}


