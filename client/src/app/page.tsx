'use client'

import About from '@/components/Home/About'
import Advertising from '@/components/Home/Advertising'
import Cart from '@/components/Home/Cart'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <About />
      <Advertising />
      <Cart />
    </>
  )
}

export default Home