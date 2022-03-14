import React from 'react'
import Product from './Product'
import Header from '../header/Header'
import Slider from '../slider/Slider'
import Welcome from './Welcome'
import Ourservice from './Ourservice'
import Ourpartner from './Ourpartner'
import Footer from './Footer'

const Home = () => {
  return (
    <>
        <Header/>
        <Slider/>
        <Welcome/>
        <Product/>
        <Ourservice/>
        <Ourpartner/>
        <Footer/>
    </>
  )
}

export default Home