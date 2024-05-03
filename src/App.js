import React from 'react'
import Navigation from './customer/component/Navigation/Navigation'
import HomePage from './customer/pages/HomePage/HomePage'
import Footer from './customer/component/Footer/Footer'
import Product from './customer/component/Product/Product'
import ProductDetail from './customer/component/ProductDetail/ProductDetail'
import Cart from './customer/component/Cart/Cart'
import Checkout from './customer/component/Checkout/Checkout'
import Order from './customer/component/Order/Order'
import OrderDetail from './customer/component/Order/OrderDetail'
import CustomerRoutes from './Routers/CustomerRoutes'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<CustomerRoutes />} />
      </Routes>
      <div>
       
        
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default App
