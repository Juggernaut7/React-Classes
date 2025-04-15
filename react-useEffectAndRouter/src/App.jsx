import React, { use } from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import cohortsData from './data/cohortsData'
import Cohorts from './pages/Cohorts'
import CohortsStudents from './pages/CohortsStudents'

const App = () => {
  const [cohorts, setCohorts] = useState([]);
  const local_key = 'cohorts-data'
  useEffect(() => {

    const stored = localStorage.getItem(local_key) || [];

    if (stored?.length) {
      setCohorts(JSON.parse(stored))
    } else {
      setCohorts(cohortsData)

    }
    localStorage.setItem(local_key, JSON.stringify(cohortsData))
  }, [])  
   


  return (
    <div>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path='/cohorts' element={<Cohorts cohorts={cohorts}/>} />
        <Route path= '/cohort/:id/students' element={<CohortsStudents cohorts = {cohorts} />} />




      </Routes>

    </div>
  )
}

export default App
