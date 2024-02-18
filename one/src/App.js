import React from 'react'
import Navbar from './component/navbar/Navbar'
import Landing from './component/landing/Landing'
import Product from './component/product/Product'
import News from './component/news/News'
import Footer from './component/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <Product/>
      <News/>
      <Footer/>
    </div>
  )
}

export default App