import React, { use } from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import cohortsData from './data/cohortsData'
import Cohorts from './pages/Cohorts'
import CohortsStudents from './pages/CohortsStudents'
import AddCohorts from './pages/AddCohorts'
import Countries from './pages/Countries'
import CountriesDetails from './pages/CountriesDetails'
import CountryInfo from './pages/CountryInfo'

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
   
  const study = {
    name: 'cloud',
    age: 20,
  }


  return (
    <div>
      <Routes>

        <Route path="/" element={<Home   study={study} />} />
        <Route path='/cohorts' element={<Cohorts cohorts={cohorts}/>} />
        <Route path= '/cohort/:id/students' element={<CohortsStudents cohorts ={cohorts} />} />
        <Route path="/add-cohort" element={<AddCohorts setCohorts={setCohorts} />} />
        <Route path = "/Countries" element={<Countries />} />
        <Route path = "/CountriesDetails" element={<CountriesDetails />} />
        <Route path="/country/:name" element={<CountryInfo />} />
        


      </Routes>

    </div>
  )
}

export default App
