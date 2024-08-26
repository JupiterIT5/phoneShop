'use client'
import { NextPage } from 'next'
import { ReactNode, useState } from 'react'
import styles from '@/styles/category/category.module.scss'
import Image from 'next/image'
import array from '@/images/icon/array.svg'

interface FilterBtn {
    children?: ReactNode
    name: string
}

const FilterBtn: NextPage<FilterBtn> = ({children, name}) => {
    const [active, setActive] = useState<boolean>(false)

  return (
    <>
        <div className={styles.filter__btn} onClick={() => setActive(!active)}>
            <h2 className={styles.name}>{name}</h2>
            <Image src={array} alt="..." className={active ? [styles.array, styles.array__active].join(' ') : styles.array} />
        </div>
        <div className={active ? [styles.filter__list, styles.filter__list__active].join(' ') : styles.filter__list}>
            {children}
        </div>
    </>
  )
}

export default FilterBtn