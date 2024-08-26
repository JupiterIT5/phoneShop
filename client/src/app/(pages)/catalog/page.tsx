'use client'

import { NextPage } from 'next'
import stylesNav from '@/styles/navList.module.scss'
import styles from '@/styles/category/category.module.scss'
import Link from 'next/link'

const Catalog: NextPage = () => {

  return (
    <>
      <nav className={stylesNav.nav__list__container}>
        <ul className={stylesNav.nav__list}>
            <li className={stylesNav.nav}><Link href='/'>Home</Link> &gt;</li>
            <li className={stylesNav.nav}><span>Catalog</span></li>
        </ul>
      </nav>
      <section className={styles.category__container}>
        
      </section>
    </>
  )
}

export default Catalog