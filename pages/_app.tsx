import type { AppProps } from 'next/app'

import '../styles/globals.scss'

export const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />
}
