import { FC } from 'react'

import styles from './Menu.module.scss'

import { Menu } from './Menu'
import { firstMenu, userMenu } from './menu.data'
import { GenreMenu } from './genres/GenreMenu'

export const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
			<GenreMenu />
			<Menu menu={userMenu} />
		</div>
	)
}
