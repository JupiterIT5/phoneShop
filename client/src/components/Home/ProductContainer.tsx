'use client'

import { NextPage } from 'next'
import styles from '@/styles/home/product.module.scss'
import { useState } from 'react'
import ProductCard from '../UI/ProductCard/ProductCard'
import { getProductAll } from '@/service/product.service'
import Loading from '../UI/Loading/Loading'

const ProductContainer: NextPage = () => {
	const [category, setCategory] = useState<string>('NewArrival')
    const {data, isLoading} = getProductAll()

	return (
		<>
			<div className={styles.product__container}>
				<ul className={styles.nav__list}>
					<li
						className={
							category === 'NewArrival'
								? [styles.nav, styles.nav__active].join(' ')
								: styles.nav
						}
						onClick={() => setCategory('NewArrival')}
					>
						New Arrival
					</li>
					<li
						className={
							category === 'Bestseller'
								? [styles.nav, styles.nav__active].join(' ')
								: styles.nav
						}
						onClick={() => setCategory('Bestseller')}
					>
						Bestseller
					</li>
					<li
						className={
							category === 'Featured Products'
								? [styles.nav, styles.nav__active].join(' ')
								: styles.nav
						}
						onClick={() => setCategory('Featured Products')}
					>
						Featured Products
					</li>
				</ul>

				{
					isLoading ? 
					<Loading /> : 
					<div className={styles.product__list}>
						{data?.getProduct.map((value, index) => (
							<ProductCard limit={8} id={value.id} count={index} name={value.name} image={value.img} key={value.id} price={value.price} />
						))}
					</div>
				}
			</div>
		</>
	)
}

export default ProductContainer
