import { FC } from 'react'
import { IHome } from './home.interface'
import { Layout } from '@/components/layout/Layout'

export const Home: FC<IHome> = () => {
	return (
		<Layout>
			<h1>Home</h1>
		</Layout>
	)
}
