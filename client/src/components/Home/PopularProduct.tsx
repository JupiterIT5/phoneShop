import { NextPage } from 'next'
import styles from '@/styles/home/popularProduct.module.scss'
import Image from 'next/image'
import popularProduct from '@/images/image/popularProduct/popularProduct.png'
import IPadPro from '@/images/image/popularProduct/IPadPro.png'
import IPhone14Pro from '@/images/image/popularProduct/IPhone14Pro.png'
import MacBookPro from '@/images/image/popularProduct/MacBookPro.png'

const PopularProduct: NextPage= () => {
  return (
    <section className={styles.popular__product__container}>
        <div className={styles.popular__product}>
            <Image src={popularProduct} alt="popular product" />
            <h2>Popular Products</h2>
            <p>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button>Shop Now</button>
        </div>
        <div className={styles.popular__product}>
            <Image src={IPadPro} alt="IPad Pro" />
            <h2>Ipad Pro</h2>
            <p>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button>Shop Now</button>
        </div>
        <div className={styles.popular__product}>
            <Image src={IPhone14Pro} alt="iPhone 14 pro" />
            <h2>iPhone 14 Pro</h2>
            <p>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button>Shop Now</button>
        </div>
        <div className={styles.popular__product}>
            <Image src={MacBookPro} alt="MacBook Pro" />
            <h2>Macbook Pro</h2>
            <p>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button>Shop Now</button>
        </div>
    </section>
  )
}

export default PopularProduct