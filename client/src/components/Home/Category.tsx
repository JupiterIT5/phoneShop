'use client'

import { NextPage } from 'next'
import styles from '@/styles/home/category.module.scss'
import CategoryItem from '../UI/Category/CategoryItem'
import phone from '@/images/icon/category/phone.svg'
import headphone from '@/images/icon/category/headphone.svg'
import computer from '@/images/icon/category/computer.svg'
import smartWatch from '@/images/icon/category/smartWatch.svg'
import camera from '@/images/icon/category/camera.svg'
import gaming from '@/images/icon/category/gaming.svg'

const Category: NextPage = () => {
  return (
    <section className={styles.category__container}>
        <h2 className={styles.title}>Browse By Category</h2>
        <div className={styles.category__list}>
            <CategoryItem img={phone} name="Phones" />
            <CategoryItem img={smartWatch} name="Smart Watches" />
            <CategoryItem img={camera} name="Cameras" />
            <CategoryItem img={headphone} name="Headphones" />
            <CategoryItem img={computer} name="Computers" />
            <CategoryItem img={gaming} name="Gaming" />
        </div>
    </section>
  )
}

export default Category