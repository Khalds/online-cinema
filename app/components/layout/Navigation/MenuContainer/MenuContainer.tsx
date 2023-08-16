import { FC } from 'react'

import styles from './Menu.module.scss'

import { Menu } from './Menu'
import { firstMenu, userMenu } from './menu.data'

export const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			{/* Genres menu */}
			<Menu menu={userMenu} />
		</div>
	)
}
