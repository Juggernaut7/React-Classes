import React from 'react'

const Footer = () => {
    const today = new Date()
  return (
    <footer className="bg-green-800 flex justify-center items-center  text-white py-4 mt-8 ">
        <p className=''>copyright &copy; {today.getFullYear()}</p>
        </footer>
  )
}

export default Footer
