import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cohorts = ({ cohorts }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen px-8 md:px-20 py-12 bg-gradient-to-br from-green-700 to-green-900 text-white">
      <h1 className="text-4xl font-bold text-center mb-10 drop-shadow-md underline underline-offset-4">
        ALL COHORTS
      </h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cohorts?.map((cohort) => (
          <div
            key={cohort?.id}
            className="bg-white text-green-900 rounded-2xl shadow-xl p-6 transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-2xl font-bold mb-3">{`Cohort Name: ${cohort?.name}`}</h2>
            <ul className="text-green-800 space-y-1 text-base font-medium">
              <li><span className="font-semibold">Mentor:</span> {cohort?.mentor}</li>
              <li><span className="font-semibold">Total Students:</span> {cohort?.studentsNum}</li>
            </ul>
            <button
              onClick={() => navigate(`/cohort/${cohort?.id}/students`)}
              className="mt-6 bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-xl w-full transition-colors duration-300"
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
