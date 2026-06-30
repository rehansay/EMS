import React from 'react'
import Header from '../other/Header'
import TaskAssign from '../other/TaskAssign'
import TaskList from '../TaskComponents/TaskList'

const EmployeeDashboard=({data})=> {
  
  return (
    <div className='p-10 bg-[1C1C1C] h-screen'>
      
      <Header data={data}/>
      <TaskAssign data={data}/>
      <TaskList data={data}/>
      
    </div>
  );
}

export default EmployeeDashboard