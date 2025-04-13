import React from 'react'

const cohortList = ({ handleDelete, handleAttendance, cohorts }) => {
    return (
        <ul className="flex flex-col gap-4">
            {cohorts.map((cohort) => (
                <li
                    key={cohort.id}
                    className={`w-full flex items-center justify-between p-4 rounded-lg shadow-sm bg-white transition-all duration-300 ${cohort.attendance ? 'border-2 border-green-500' : 'border border-gray-300'
                        }`}
                >
                    <input
                        type="checkbox"
                        onChange={() => handleAttendance(cohort.id)}
                        checked={cohort.attendance}
                        className="h-6 w-6 text-green-500 focus:ring-green-500 cursor-pointer"
                    />

                    <label
                        onDoubleClick={() => handleAttendance(cohort.id)}
                        className="text-[20px] font-medium text-gray-800 cursor-pointer"
                        title="Double click to toggle attendance"
                    >
                        {cohort.name}
                    </label>

                    <button
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded text-[16px] font-semibold transition duration-200"
                        onClick={() => handleDelete(cohort.id)}
                    >
                        Delete
                    </button>
                </li>

            ))}
        </ul>
    )
}

export default cohortList
