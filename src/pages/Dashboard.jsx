import React, { useState } from 'react'
import SidebarComponent from './Component/SidebarCompo'
import CoursesComponent from './Component/CoursesCompo';
import OverviewComponent from './Component/OverviewCompo'

const Dashboard = () => {
    const [view, setView] = useState("overview");

    return (
        <div className='flex w-full h-full p-0 m-0 box-border'>
            <SidebarComponent setView={setView} />
            <div className='sm:ml-24 w-full sm:w-[calc(100%-6rem)]'>
                {
                    view === 'overview' ? <OverviewComponent /> : <CoursesComponent />
                }
            </div>
        </div>
    )
}

export default Dashboard