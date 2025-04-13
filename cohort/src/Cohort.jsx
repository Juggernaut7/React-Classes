import React from 'react'

const Cohort = ({handleAttendance, handleDelete, cohort}) => {
  return (
    <li key={cohort.id} style={(cohort.attendance) ? {border: "green 2px solid"}: null} className='bg-[#e9edc9] py-[4px] px-28 w-full flex items-center justify-between'>

                <input type="checkbox" onChange={() => handleAttendance(cohort.id)} className='cursor-pointer w-[48px] h-[48px]' checked={(cohort.attendance) ? true : null} /> 

               <label onDoubleClick={() => handleAttendance(cohort.id)} className='text-[25px]'>{cohort.name} </label> <br />
                <button className="bg-red-500 rounded-lg text-white px-3" onClick={() => handleDelete(cohort.id)}>Delete</button>
            </li>
  )
}

export default Cohort