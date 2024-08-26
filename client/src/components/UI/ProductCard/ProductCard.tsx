'use client'

import { NextPage } from 'next'
import { StaticImageData } from 'next/image'
import styles from './ProductCard.module.scss'
import Image from 'next/image'
import hearth from '@/images/icon/hearth2.svg'
import hearthActive from '@/images/icon/heartActive.svg'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useActions } from '@/hooks/useActions'
import Loading from '../Loading/Loading'
import { useEffect, useState } from 'react'

interface IProduct {
	id: number
	image: StaticImageData | string
	name: string
	price: number
    count: number
    limit: number
}

const ProductCard: NextPage<IProduct> = ({ id, image, name, price, count, limit }) => {
	const favoriteStore = useTypedSelector(store => store.favorite.products)
    const basketStore = useTypedSelector(store => store.basket.products)
    const {addToFavorite, removeToFavorite} = useActions()
    const [activeHearth, setActiveHearth] = useState<boolean>(false)

    const setName = (name: string) => {
        if (name.length > 30) {
            return name.slice(0, 31) + '...'
        }
        return name
    }

    useEffect(() => {
        let active = false
        favoriteStore.forEach(value => {
            if(value.id == id) {
                setActiveHearth(true)
                active = true
            }
        })
        !active ? setActiveHearth(false) : ''
    }, [favoriteStore])

    const handleFavorite = (id: number) => {
        let active = false
        favoriteStore.forEach(value => { 
            if (value.id == id) {
                removeToFavorite(id)
                active = true
            }
        })
        return !active ? addToFavorite({id, name, price, img: image}) : ''
    }

	if (count < limit) {
        return (
            <div className={styles.product}>
                <div className={styles.product__favorite}>
                    <Image src={activeHearth ? hearthActive : hearth} alt='favorite' onClick={() => handleFavorite(id)} />
                </div>
                {image ? <Image src={image} alt={name} className={styles.product__img} width={160} height={160} /> : <Loading />}
                <h2 className={styles.product__name}>{setName(name)}</h2>
                <p className={styles.product__price}>${price}</p>
                <button className={styles.buy__product}>Buy Now</button>
            </div>
        )
    }
}

export default ProductCard
