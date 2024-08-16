'use client'

import { NextPage } from 'next'
import styles from '@/styles/home/cart.module.scss'
import ProductCart from '../UI/ProductCart'
import phone from '@/images/image/cart/phone.png'
import watch from '@/images/image/cart/watch.png'
import airpods from '@/images/image/cart/airpods.png'


const Cart: NextPage = () => {
  return (
    <div className={styles.cart__container}>
        <div className={styles.product__card}>
          <div className={styles.title}>Shopping Cart</div>
          <div className={styles.product__container}>
            <ProductCart img={phone} name='Apple iPhone 14 Pro Max 128Gb Deep Purple' price={1399} article='#25139526913984'/>
          </div>
        </div>
        <div className={styles.reg_order}></div>
    </div>
  )
}

export default Cart