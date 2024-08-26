'use client'

import { NextPage } from 'next'
import styles from '@/styles/home/cart.module.scss'
import ProductCart from '../UI/productCart/ProductCart'
import phone from '@/images/image/cart/phone.png'
import watch from '@/images/image/cart/watch.png'
import airpods from '@/images/image/cart/airpods.png'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useEffect, useState } from 'react'


const Cart: NextPage = () => {
  const products = useTypedSelector(state => state.basket.products)
  const [sum, setSum] = useState<number>(0)
  const [code, setCode] = useState<string>('')
  const [numCard, setNumCard] = useState<string>('')
  
  useEffect(() => {
    products.forEach(product => setSum(sum + product.price))
  }, [])

  return (
    <div className={styles.cart__container}>
        <div className={styles.product__card}>
          <div className={styles.title}>Shopping Cart</div>
          <div className={styles.product__container}>
            <ProductCart img={phone} name='Apple iPhone 14 Pro Max 128Gb Deep Purple' price={1399} article='#25139526913984'/>
            <ProductCart img={watch} name='AirPods Max Silver' price={549} article='#53459358345' />
            <ProductCart img={airpods} name='Apple Watch Series 9 GPS 41mm Starlight Aluminium ' price={399} article='#63632324' />
          </div>
        </div>
        <div className={styles.reg_order}>
          <h2 className={styles.title}>Order summary</h2>
          <form action="...">
            <h3>Discount code / Promo code</h3>
            <input type="text" placeholder='Code' onChange={e => setCode(e.target.value)} name="code" />
            <h3>Your bonus card number</h3>
            <input type="text" placeholder='Enter Card Number' name="card" onChange={e => setNumCard(e.target.value)} />
          </form>
          <div className={styles.reg__order__price}>
            <h4><span>Subtotal</span></h4>
            <span>${sum}</span>
          </div>
          <div className={styles.reg__order__price}>
            <h4>Estimated Tax</h4>
            <span>{sum ? '$50' : '$0' }</span>
          </div>
          <div className={styles.reg__order__price}>
            <h4>Estimated shipping & Handling</h4>
            <span>{sum ? '$29' : '$0'}</span>
          </div>
          <div className={styles.reg__order__price}>
            <h4><span>Total</span></h4>
            <span>${sum ? sum + 79 : sum}</span>
          </div>
          <button className={styles.submit}>Checkout</button>
        </div>
    </div>
  )
}

export default Cart