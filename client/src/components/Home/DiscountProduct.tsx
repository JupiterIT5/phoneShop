'use client'

import { NextPage } from 'next'
import Image from 'next/image'
import styles from '@/styles/home/discountProduct.module.scss'
import ProductCard from '../UI/ProductCard/ProductCard'
import { getProductAllDiscount } from '@/service/product.service'
import Loading from '../UI/Loading/Loading'

const DiscountProduct: NextPage = () => {
    const {data, isLoading} = getProductAllDiscount()

  return (
    <div className={styles.discount__product}>
        <h2 className={styles.title}>Discounts up to -50%</h2>
        {
          isLoading ? 
          <Loading /> :
          <div className={styles.product__container}>
            {data?.getProductDiscount.map((value, index) => (
                <ProductCard limit={4} count={index} image={value.img} name={value.name} id={value.id} price={value.price} key={value.id} />
            ))}
          </div>
        }
    </div>
  )
}

export default DiscountProduct