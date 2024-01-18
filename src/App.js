import React from 'react'
import './Style.css'

import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Testimonial from './Component/Testimonial'
import Footer from './Component/Footer'
import Work from './Component/Work'
// import { BrowserRouter, Routes,Route } from 'react-router-dom'


const App = () => {
  return (
    <div className='App'>
      {/* <BrowserRouter>
      
      <Routes>

      <Route exact path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Testimonial' element={<Testimonial/>}/>
      <Route path='/Footer' element={<Footer/>}/>

      </Routes>
      
      </BrowserRouter> */}
      <Home/>
      <About/>
      <Work/>
      <Contact/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App
