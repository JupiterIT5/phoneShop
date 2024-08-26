'use client'

import { NextPage } from 'next'
import styles from './NavList.module.scss'
import Link from 'next/link'
import { useEffect } from 'react'

interface INavList {
    path?: INav
    currentPath: string
}

interface INav {
    [key: string]: string
}

const NavList: NextPage<INavList> = ({path, currentPath}) => {

  return (
    <nav className={styles.nav__list__container}>
        <ul className={styles.nav__list}>
            <li className={styles.nav}><Link href='/'>Home</Link></li>
            <li className={styles.nav}>&gt;</li>
        </ul>
    </nav>
  )
}

export default NavList