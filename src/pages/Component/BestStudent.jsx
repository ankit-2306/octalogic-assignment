import React, { useState } from 'react'
import BestStudents from '../../allData/BestStudents.json'

const BestStudent = () => {
    const [showAll, setShowAll] = useState(false);

    const handleToggleView = () => {
        setShowAll(!showAll);
    };

    const displayedStudents = showAll ? BestStudents : BestStudents.slice(0, 5);

    return (
        <>
            <div className="mt-8 mb-3">
                <div className="flex justify-between">
                    <h1 className="text-xl text-[#83858b] font-semibold">BEST STUDENTS</h1>
                    <p
                        className="text-[#b94891] text-md font-[600] cursor-pointer"
                        onClick={handleToggleView}
                    >
                        {showAll ? "Show Less" : "View All Students"}
                    </p>
                </div>
                <div className="overflow-x-auto p-5 px-8 mt-4 bg-white rounded-lg">
                    <table className="min-w-full">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="py-4 text-left text-sm font-bold text-gray-900 w-1/6">Reg. No</th>
                                <th className="py-4 text-left text-sm font-bold text-gray-900 w-1/6">F. Name</th>
                                <th className="py-4 text-left text-sm font-bold text-gray-900 w-1/6">L. Name</th>
                                <th className="py-4 text-left text-sm font-bold text-gray-900 w-1/6">Course #</th>
                                <th className="py-4 text-left text-sm font-bold text-gray-900 w-1/6">Total Fees</th>
                                <th className="py-4 text-left text-sm font-bold text-gray-900 w-1/6">Reg. Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedStudents?.map((row, index) => (
                                <tr key={index} className="border-b border-gray-200">
                                    <td className="py-2 w-1/6">{row.enrNo}</td>
                                    <td className="py-2 w-1/6">{row.fName}</td>
                                    <td className="py-2 w-1/6">{row.lName}</td>
                                    <td className="py-2 w-1/6">{row.courseNo}</td>
                                    <td className="py-2 w-1/6">{row.fees}</td>
                                    <td className="py-2 w-1/6">{row.enrDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default BestStudent