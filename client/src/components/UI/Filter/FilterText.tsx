'use client'

import { NextPage } from 'next'
import styles from '@/styles/category/category.module.scss'
import { useState } from 'react'
import { HiOutlineCheck } from "react-icons/hi";

interface FilterText {
    name: string
    count?: number
}

const FilterText: NextPage<FilterText> = ({name, count}) => {
  const [active, setActive] = useState<boolean>(false)

  return (
    <div className={styles.filter__text__list} onClick={() => setActive(!active)}>
      <label htmlFor="checkbox" className={active ? styles.label__active : ''}><HiOutlineCheck color='white' className={styles.img}/></label>
      <h2>{name}</h2>
      <h3>{count}</h3>
    </div>
  )
}

export default FilterText