import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CohortsStudents = ({ cohorts }) => {
  const { id } = useParams();
  const [students, setStudent] = useState([]);

  useEffect(() => {
    if (students.length) return;

    const filterCohort = cohorts?.filter((cohort) => cohort.id === parseInt(id));
    if (filterCohort?.length) setStudent(filterCohort[0]?.students);
  }, []);

  return (
    <div className="min-h-screen px-8 md:px-20 py-12 bg-gradient-to-br from-green-700 to-green-900 text-white">
      <h1 className="text-4xl font-bold mb-8 drop-shadow-md text-white text-center">
        Students in Cohort {id}
      </h1>

      <div className="overflow-x-auto shadow-2xl rounded-2xl bg-white text-gray-800">
        <table className="min-w-full table-auto text-left">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="py-3 px-6">S/N</th>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Age</th>
              <th className="py-3 px-6">Height</th>
            </tr>
          </thead>
          <tbody>
            {students?.map((student, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 hover:bg-green-50 transition-colors duration-200"
              >
                <td className="py-3 px-6">{index + 1}</td>
                <td className="py-3 px-6">{student.name}</td>
                <td className="py-3 px-6">{student.age}</td>
                <td className="py-3 px-6">{student.height}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CohortsStudents;
