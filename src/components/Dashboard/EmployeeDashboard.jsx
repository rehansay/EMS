import React from 'react'
import Header from '../other/Header'
import TaskAssign from '../other/TaskAssign'
import TaskList from '../TaskComponents/TaskList'
function EmployeeDashboard() {
  return (
    <div className='p-20 bg-[#1C1C1C] h-screen'>

        <Header/>
        <TaskAssign/>
        <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
