import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NumberBox from './pages/NumberBox'

const App = () => {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/numberbox' element={<NumberBox />} />

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
