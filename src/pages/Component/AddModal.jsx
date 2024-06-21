import React from 'react';
import {useState} from 'react';
const AddModal = ({ isOpen, onClose }) => {

    if (!isOpen) return null;
    const [formData,setFormData]=useState({});
    

    function handleSubmit(e){
        e.preventDefault();
        const {name,	description	,instructor	,instrument,	dayOfWeek,	numberOfStudents,	price,status}=e.target;
        setFormData({name:name,description:description,instructor:instructor,dayOfWeek:dayOfWeek,numberOfStudents:numberOfStudents,price:price,status:status});
       
        onClose();
        if (localStorage.getItem('courseAdded') !== null) {
            let array=JSON.parse(localStorage.getItem('courseAdded'));
            array.push(formData);
            localStorage.setItem("courseAdded",JSON.stringify(array));
        } else {
              localStorage.setItem("courseAdded",JSON.stringify([formData]));
        }
          
    }

    return (
        <>
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                <div className="bg-white p-6 rounded shadow-md w-1/3">
                    <h2 className="text-2xl mb-4">
                        Add New Course
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"

                            placeholder="Name"
                            className="w-full mb-2 p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="text"
                            name="description"

                            placeholder="Description"
                            className="w-full mb-2 p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="text"
                            name="instructor"

                            placeholder="Instructor"
                            className="w-full mb-2 p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="text"
                            name="instrument"

                            placeholder="Instrument"
                            className="w-full mb-2 p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="text"
                            name="dayOfWeek"

                            placeholder="Day of Week"
                            className="w-full mb-2 p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="number"
                            name="numberOfStudents"

                            placeholder="Number of Students"
                            className="w-full mb-2 p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="number"
                            name="price"

                            placeholder="Price"
                            className="w-full mb-2 p-2 border border-gray-300 rounded"
                        />
                        <select
                            name="status"

                            className="w-full mb-2 p-2 border border-gray-300 rounded"
                        >
                            <option value="Active">Active</option>
                            <option value="Closed">Closed</option>
                            <option value="Archived">Archived</option>
                        </select>
                        <div className="flex justify-end items-center gap-1">
                            <button
                                type="submit"
                                className="bg-pink-400 text-white px-4 py-2 rounded"
                            >
                                Add Course
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddModal;