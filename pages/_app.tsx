import type { AppProps } from 'next/app'

import '../styles/globals.scss'
import { MainProvider } from 'providers/MainProvider'


const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<MainProvider>
			<Component {...pageProps} />
		</MainProvider>
	)
}
export default MyApp
