import React, { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoMdSearch } from "react-icons/io";
import { LuPlus } from "react-icons/lu";
import CourseList from '../../allData/CourseList.json'
import AddModal from "./AddModal";

const CoursesCompo = () => {
    let arrayy=[];
    if(localStorage.getItem('courseAdded')){
    const myArrayStr = localStorage.getItem('courseAdded');
    arrayy = JSON.parse(myArrayStr);
    }

    const [localArray,setLocalArray]=useState(arrayy);


    const [dropdownStates, setDropdownStates] = useState(
        new Array(CourseList.length).fill(false)
    );
    const [searchTerm, setSearchTerm] = useState("");
    const [successState, setSuccessState] = useState('Active')
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const getStatusClass = (status) => {
        switch (status) {
            case "Active":
                return "text-green-500 bg-green-100";
            case "Closed":
                return "text-red-500 bg-red-100";
            case "Archived":
                return "text-gray-500 bg-gray-100";
            default:
                return "";
        }
    };

    const getOpacityClass = (status) => {
        switch (status) {
            case "Active":
                return " opacity-90";
            case "Closed":
                return " opacity-40 ";
            case "Archived":
                return " opacity-90";
            default:
                return "";
        }
    };

    const toggleDropdown = (index, success) => {
        setSuccessState(success)
        setDropdownStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredCourses = CourseList.filter((course) => {
        return (
            course?.name?.toLowerCase().includes(searchTerm.toLowerCase())
            || course?.instrument?.toLowerCase().includes(searchTerm.toLowerCase())
            || course?.dayOfWeek?.toLowerCase().includes(searchTerm.toLowerCase())
            || course?.instructor?.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }
    ).slice(0,10);

    return (
        <>
            <div className="bg-gray-100 flex-1 px-8 py-5 relative">
                <h1 className="text-3xl text-[#83858b] font-semibold mb-7 overflow-hidden">Courses</h1>
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-xl text-gray-500 font-semibold">COURSE LIST</h1>
                    <div className="bg-white flex gap-2 px-4 py-2 border border-gray-300 rounded-md items-center">
                        <IoMdSearch className="text-xl text-gray-500" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="focus:outline-none"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md px-8 overflow-y-hidden h-[60%] pb-10">
                    <table className="min-w-full ">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="py-4 text-left text-sm font-bold text-gray-900">
                                    Name
                                </th>
                                <th className="py-4 text-left text-sm font-bold text-gray-900">
                                    Description
                                </th>
                                <th className="py-4 text-left text-sm font-bold text-gray-900">
                                    Instructor
                                </th>
                                <th className="py-4 text-left text-sm font-bold text-gray-900">
                                    Instrument
                                </th>
                                <th className="py-4 text-left text-sm font-bold text-gray-900">
                                    Day of Week
                                </th>
                                <th className="py-4 text-left text-sm font-bold text-gray-900">
                                    # of Students
                                </th>
                                <th className="py-4 text-left text-sm font-bold text-gray-900">
                                    Price
                                </th>
                                <th className="py-4 text-left text-sm font-bold text-gray-900">
                                    Status
                                </th>
                                <th className="py-4 text-right text-sm font-bold text-gray-900">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCourses.map((course, index) => (
                                <tr key={index} className="border-b border-gray-200 relative">
                                    <td className="py-2">{course.name}</td>
                                    <td className="py-2">{course.description}</td>
                                    <td className="py-2">{course.instructor}</td>
                                    <td className="py-2">{course.instrument}</td>
                                    <td className="py-2">{course.dayOfWeek}</td>
                                    <td className="py-2">{course.numberOfStudents}</td>
                                    <td className="py-2"> ${course.price}</td>
                                    <td className="py-2">
                                        <span
                                            className={`py-1 px-3 rounded-md text-sm font-semibold ${getStatusClass(
                                                course.status
                                            )}`}
                                        >
                                            {course.status}
                                        </span>
                                    </td>
                                    <td className="py-2 px-2 text-right relative">
                                        <button
                                            onClick={() => { (course.status) == 'Closed' ? null : toggleDropdown(index, course.status) }}

                                            className={`text-gray-600 hover:text-gray-700 text-xl ${getOpacityClass(
                                                course.status
                                            )}`}
                                        >
                                            <HiOutlineDotsVertical />
                                        </button>
                                    </td>
                                    {dropdownStates[index] && course.status == 'Active' ?
                                        <div className="bg-white w-[180px] p-5 flex flex-col gap-1 rounded-md items-start                                text-gray-700 font-[500] absolute top-8 right-0 z-40">
                                            <div className="cursor-pointer">Edit course</div>
                                            <div className="cursor-pointer">Close course</div>
                                            <div className="cursor-pointer">Archive course</div>
                                        </div> : null

                                    }

                                    {dropdownStates[index] && course.status == 'Archived' ?
                                        <div className="bg-white w-[180px] p-5 flex flex-col gap-1 rounded-md items-start
                                             text-gray-700 font-[500] absolute top-8 right-0 z-40">
                                            <div className="cursor-pointer">Unarchive course</div>

                                        </div> : null}

                                </tr>
                            ))}
                            {localArray.length && localArray.map((course, index) => (
                                <tr key={index} className="border-b border-gray-200 relative">
                                    <td className="py-2">{course.name}</td>
                                    <td className="py-2">{course.description}</td>
                                    <td className="py-2">{course.instructor}</td>
                                    <td className="py-2">{course.instrument}</td>
                                    <td className="py-2">{course.dayOfWeek}</td>
                                    <td className="py-2">{course.numberOfStudents}</td>
                                    <td className="py-2"> ${course.price}</td>
                                    <td className="py-2">
                                        <span
                                            className={`py-1 px-3 rounded-md text-sm font-semibold ${getStatusClass(
                                                course.status
                                            )}`}
                                        >
                                            {course.status}
                                        </span>
                                    </td>
                                    <td className="py-2 px-2 text-right relative">
                                        <button
                                            onClick={() => { (course.status) == 'Closed' ? null : toggleDropdown(index, course.status) }}

                                            className={`text-gray-600 hover:text-gray-700 text-xl ${getOpacityClass(
                                                course.status
                                            )}`}
                                        >
                                            <HiOutlineDotsVertical />
                                        </button>
                                    </td>
                                    {dropdownStates[index] && course.status == 'Active' ?
                                        <div className="bg-white w-[180px] p-5 flex flex-col gap-1 rounded-md items-start                                text-gray-700 font-[500] absolute top-8 right-0 z-40">
                                            <div className="cursor-pointer">Edit course</div>
                                            <div className="cursor-pointer">Close course</div>
                                            <div className="cursor-pointer">Archive course</div>
                                        </div> : null

                                    }

                                    {dropdownStates[index] && course.status == 'Archived' ?
                                        <div className="bg-white w-[180px] p-5 flex flex-col gap-1 rounded-md items-start
                                             text-gray-700 font-[500] absolute top-8 right-0 z-40">
                                            <div className="cursor-pointer">Unarchive course</div>

                                        </div> : null}

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className=" bottom-8 right-12 flex justify-end">
                    <button
                        onClick={handleOpenModal}
                        className="px-2 py-2 my-10 mt-24 bg-pink-400 text-white rounded flex items-center shadow"
                    >
                        <LuPlus className="mr-1" /> Add Course
                    </button>

                </div>
                <AddModal
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}

                />
            </div>
        </>
    )
}

export default CoursesCompo