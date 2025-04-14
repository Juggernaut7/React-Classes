import React, { useState } from 'react'
import Content from './Content';

const App = () => {
  const [cohorts, setCohorts] = useState([
    { id: 1, name: "Lateefat", gender: "Female", attendance: true },
    { id: 2, name: "Feranmi", gender: "Male", attendance: false },
    { id: 3, name: "Ridwan", gender: "Male", attendance: true },
    { id: 4, name: "Idris", gender: "Male", attendance: false },
    { id: 5, name: "Muizi", gender: "Male", attendance: true }
  ]);

  const handleAttendance = (id) => {
    const cohortList = cohorts.map((cohort) =>
      cohort.id === id ? { ...cohort, attendance: !cohort.attendance } : cohort
    );
    setCohorts(cohortList);
    localStorage.setItem('cohortList', JSON.stringify(cohortList));
    

  };

  const handleDelete = (id) => {
    const cohortList = cohorts.filter((cohort) => cohort.id !== id);
    setCohorts(cohortList);
    localStorage.setItem('cohortList', JSON.stringify(cohortList));
  };

  return (
    <div>
      <header />
      <Content 
        handleAttendance={handleAttendance} 
        handleDelete={handleDelete} 
        cohorts={cohorts} 
      />
      <footer />
    </div>
  );
};

export default App;
