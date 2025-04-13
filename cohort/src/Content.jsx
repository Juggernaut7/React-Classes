// import { useState } from 'react'
import React from 'react'

import CohortList from "./CohortList";

const Content = ({handleAttendance, handleDelete, cohorts}) => {


    return (
        <main className="h-[85vh] bg-[#F6F8FA] p-6">
            {cohorts.length ? (
                <CohortList handleDelete={handleDelete} handleAttendance={handleAttendance} cohorts={cohorts} />
                
            ) : (
                <p className="text-gray-600 text-center mt-8 text-xl">No cohort listed</p>
            )}
        </main>
    );
};

export default Content;
