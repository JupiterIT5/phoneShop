'use client'

import About from '@/components/Home/About'
import Advertising from '@/components/Home/Advertising'
import Cart from '@/components/Home/Cart'
import Category from '@/components/Home/Category'
import DiscountProduct from '@/components/Home/DiscountProduct'
import PopularProduct from '@/components/Home/PopularProduct'
import ProductContainer from '@/components/Home/ProductContainer'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <About />
      <Advertising />
      <Cart />
      <Category />
      <ProductContainer />
      <PopularProduct />
      <DiscountProduct />
    </>
  )
}

export default Home