import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-start h-screen bg-gradient-to-br from-green-700 to-green-900 px-8 md:px-20'>
      <h1 className='text-5xl font-extrabold text-white drop-shadow-lg tracking-wide mb-8'>
        Cohort Manager
      </h1>

      <div className='space-y-4'>
        <p className='text-white text-2xl font-semibold'>
          Welcome to Cohort Manager!
        </p>
        <p className='text-white text-xl'>
          This is a web application that allows you to manage your cohorts.
        </p>

        <div className='flex flex-wrap gap-4 mt-6'>
          <button className='bg-white text-green-700 text-lg font-semibold py-2 px-6 rounded-xl transition duration-300 hover:bg-green-600 hover:text-white shadow-md'>
            <Link 
              to="/cohorts" 
              className="block w-full h-full text-green-700 hover:text-white"
            >
              View Cohort
            </Link>
          </button>

          <button className='bg-white text-green-700 text-lg font-semibold py-2 px-6 rounded-xl transition duration-300 hover:bg-green-600 hover:text-white shadow-md'>
            <Link 
              to="/add-cohort" 
              className="block w-full h-full text-green-700 hover:text-white"
            >
              Add Cohort
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
