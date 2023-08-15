import React, { FC } from 'react'

import styles from './Layout.module.scss'

import { Sidebar } from './Sidebar/Sidebar'
import { Navigation } from './Navigation/Navigation'

export const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}>{children}</div>
			<Sidebar />
		</div>
	)
}
