import React from 'react'
import Weather from './Weather'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Gallery from './Gallery'
import Users from './Users'

const App = () => {
  return (
    <div>
     <BrowserRouter>
     
     <Routes> 

      <Route path="/" element={<Weather/>} />
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/users' element={<Users/>} />

     </Routes>
     </BrowserRouter>
      
    </div>
  )
}

export default App
