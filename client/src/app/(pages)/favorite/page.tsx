'use client'

import { NextPage } from 'next'
import stylesNav from '@/styles/navList.module.scss'
import stylesFavorite from '@/styles/favorite.module.scss'
import Link from 'next/link'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import ProductCard from '@/components/UI/ProductCard/ProductCard'

interface Props {}

const Favorite: NextPage<Props> = ({}) => {
  const products = useTypedSelector(state => state.favorite.products)

  return (
    <>
      <nav className={stylesNav.nav__list__container}>
        <ul className={stylesNav.nav__list}>
            <li className={stylesNav.nav}><Link href='/'>Home</Link> &gt;</li>
            <li className={stylesNav.nav}><span>Favorite</span></li>
        </ul>
      </nav>
      {
        products.length
        ?
          <div className={stylesFavorite.product__container}>
            {products.map((product, index) => (
              <ProductCard count={0} limit={100} name={product.name} key={index} price={product.price} id={product.id} image={product.img} />
            ))}
          </div>
        :
          <div className={stylesFavorite.not__found}>
            <h2>Избранное отсутствует.</h2>
          </div>          
      }
    </>
  )
}

export default Favorite