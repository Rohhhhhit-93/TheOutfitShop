import React from 'react'
import NavigationBar from './NavigationBar'
import SimpleSlider from './SimpleSlider'
import Categories from './Varieties'
import Sale from './Sale'
import ProductList from './ProductList'
import Footer from './Footer'
import PaymentInterface from './PaymentInterface'
import Wishlist from './WishList'

export default function WishListSlice() {
  return (
    <>
    <NavigationBar />
    <Wishlist />
    <SimpleSlider />
    <Categories />
    <Sale />
    <ProductList />
    <Footer />
    <PaymentInterface />
    </>
  )
}
