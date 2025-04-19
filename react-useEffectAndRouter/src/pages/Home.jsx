import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({study}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-700 to-green-900 px-8 md:px-20 py-16 flex items-center">
      <div className="max-w-3xl text-left space-y-8">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-md tracking-wide">
          Cohort Manager
        </h1>

        <div className="space-y-4">
          <p className="text-white text-2xl font-semibold">
            Welcome to Cohort Manager!
          </p>
          <p className="text-white text-lg leading-relaxed">
            A sleek and simple web app to help you manage and organize your cohorts efficiently.
          </p>
        </div>
        <div>{study.name}</div>

        <div className="flex flex-wrap gap-4 pt-4">
          <Link to="/cohorts" className="bg-white text-green-700 text-lg font-semibold py-2 px-6 rounded-xl shadow-md transition duration-300 hover:bg-green-600 hover:text-white">
            View Cohorts
          </Link>
          <Link to="/add-cohort" className="bg-white text-green-700 text-lg font-semibold py-2 px-6 rounded-xl shadow-md transition duration-300 hover:bg-green-600 hover:text-white">
            Add Cohort
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
