import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cohorts = ({ cohorts }) => {
  const navigate = useNavigate(); 

  return (
    <div className="p-6 bg-gradient-to-b from-slate-50 to-slate-200 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10 underline underline-offset-4">
        ALL COHORTS
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cohorts?.map((cohort) => (
          <div
            key={cohort?.id}
            className="bg-white rounded-2xl shadow-lg p-6 transition-transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">{`Cohort Name: ${cohort?.name}`}</h2>
            <ul className="text-gray-700 space-y-1 text-sm">
              <li><span className="font-medium">Mentor:</span> {cohort?.mentor}</li>
              <li><span className="font-medium">Total Students:</span> {cohort?.studentsNum}</li>
            </ul>
            <button
              onClick={() => navigate(`/cohort/${cohort?.id}/students`)} 
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg w-full"
            >
              View Students
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cohorts;
