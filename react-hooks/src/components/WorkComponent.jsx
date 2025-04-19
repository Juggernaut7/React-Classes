import React from 'react'

const WorkComponent = ({img, title, description}) => {
  return (
    <div className='bg-primaryColour p-4 flex flex-col gap-3 max-w-full hover:bg-white/30 hover:rounded-lg'>
      <img src={img} alt="" className='h-10 w-10 bg-primaryBlue p-1 rounded-full'/>
      <h2 className='font-bold'>{title}</h2>
      <p className='text-lg'>{description}</p>
    </div>
  )
}

export default WorkComponent