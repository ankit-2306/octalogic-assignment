import React from 'react'
import user from '../../assets/users_icon.png'
import Enrollment from './Enrollment'
import Highlights from '../../allData/Highlights.json'
import BestStudent from './BestStudent'

const OverviewCompo = () => {


    return (
        <>
            <div className="flex flex-col flex-1 bg-[#f4f4f4] py-3 px-5">

                <h1 className="text-3xl text-[#83858b] font-semibold overflow-hidden">Overview</h1>
                <div className="flex gap-4 ">
                    {Highlights.map((item) => (
                        // <ItemsCard key={item.id} item={item} />
                        <>
                            <div className="flex gap-5 bg-white rounded-lg py-4 px-3 min-w-[232px] w-64  mt-8 ">
                                <div className="w-8 h-8 rounded-full bg-[#b2eecf] flex justify-center items-center text-2xl ">
                                    <img src={user} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold opacity-70">{item.title}</h2>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                    <p className="text-xs text-[#d571b2] cursor-pointer mt-2 text-right ">View</p>
                                </div>
                            </div>
                        </>
                    ))}
                </div>

                <div className=" mt-5">
                    <Enrollment />
                    <BestStudent />
                </div>
            </div>
        </>
    )
}

export default OverviewCompo