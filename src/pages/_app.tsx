import Banner from '@/components/CompanyDetails/CompanyDetails'
import Logo from '@/components/LogoBanner/LogoBanner'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
            
  <Component {...pageProps} />
  </>
}
