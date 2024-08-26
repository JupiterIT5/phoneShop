import { NextPage } from 'next'
import { StaticImageData } from 'next/image'
import Image from 'next/image'
import styles from './CategoryItem.module.scss'

interface ICategory {
    img: StaticImageData
    name: string
}

const CategoryItem: NextPage<ICategory> = ({name, img}) => {
  return (
    <div className={styles.category}>
      <Image src={img} alt="name" />
      <h3>{name}</h3>
    </div>
  )
}

export default CategoryItem