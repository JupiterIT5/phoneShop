'use client'

import { NextPage } from 'next'
import stylesNav from '@/styles/navList.module.scss'
import styles from '@/styles/category/category.module.scss'
import Link from 'next/link'
import FilterBtn from '@/components/UI/Filter/FilterBtn'
import FilterText from '@/components/UI/Filter/FilterText'
import { getProductAll } from '@/service/product.service'
import { useEffect } from 'react'

const Catalog: NextPage = () => {
  const {data} = getProductAll()

  return (
    <>
      <nav className={stylesNav.nav__list__container}>
        <ul className={stylesNav.nav__list}>
            <li className={stylesNav.nav}><Link href='/'>Home</Link> &gt;</li>
            <li className={stylesNav.nav}><span>Catalog</span></li>
        </ul>
      </nav>
      <section className={styles.category__container}>
        <div className={styles.filter__container}>
          <FilterBtn name='Category'>
            <FilterText name='iPhone' count={data?.getProduct.filter(data => data.category == 'iPhone').length} />
            <FilterText name='MacBook' count={data?.getProduct.filter(data => data.category == 'MacBook').length} />
            <FilterText name='Apple Watch' count={data?.getProduct.filter(data => data.category == 'Apple Watch').length} />
            <FilterText name='Apple TV' count={data?.getProduct.filter(data => data.category == 'Apple TV').length} />
            <FilterText name='iPod' count={data?.getProduct.filter(data => data.category == 'iPod').length} />
            <FilterText name='iMac' count={data?.getProduct.filter(data => data.category == 'iMac').length} />
          </FilterBtn>
          <FilterBtn name='Battery capacity'></FilterBtn>
          <FilterBtn name='Screen type'></FilterBtn>
          <FilterBtn name='Screen diagonal'></FilterBtn>
          <FilterBtn name='Protection class'></FilterBtn>
          <FilterBtn name='Built-in memory'></FilterBtn>
        </div>
      </section>
    </>
  )
}

export default Catalog