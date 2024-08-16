'use client'

import Image from 'next/image'
import { NextPage } from 'next'
import { useEffect, useMemo, useState } from 'react'
import { GoPlus } from "react-icons/go";
import styles from './productCart.module.scss'
import { StaticImageData } from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { FiMinus } from 'react-icons/fi'
import { IoIosClose } from "react-icons/io";

interface IProductCart {
    img: StaticImport | StaticImageData
    name: string
    article: string
    price: number
}

const ProductCart: NextPage<IProductCart> = ({img, name, price, article}) => {
  const [count, setCount] = useState<number>(1)
  const [minus, setMinus] = useState<boolean>(false)
  const [plus, setPlus] = useState<boolean>(false)
  
  useMemo(() => {
    console.log(count)
    if (count <= 1) {
      setMinus(true)
      setPlus(false)
    } else if (count >= 99) {
      setMinus(false)
      setPlus(true)
    } else {
      setMinus(false)
      setPlus(false)
    }
  }, [count])

  return (
    <div className={styles.productCart}>
      <Image src={img} alt={name} />
      <div className={styles.text}>
        <div className={styles.name}>{name}</div>
        <div className={styles.article}>{article}</div>
      </div>
      <div className={styles.count}>
        <FiMinus style={!minus ? {cursor: 'pointer'} : {opacity: 0.5}} onClick={() => !minus && setCount(count - 1)} />
        <input step={1} min={1} max={99} type="number" value={count} defaultValue={1} disabled />
        <GoPlus style={!plus ? {cursor: 'pointer'} : {opacity: 0.5}} onClick={() => !plus && setCount(count + 1)} />
      </div>
      <h3 className={styles.price}>${price*count}</h3>
      <IoIosClose className={styles.close} />
    </div>
  )
}

export default ProductCart