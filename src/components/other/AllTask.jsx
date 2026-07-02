import React,{useContext} from 'react'
import {AuthContext} from '../../context/AuthProvider'

const AllTask = () => {

    const [userData] = useContext(AuthContext)
    
    console.log(userData);


  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
        <div className=' bg-zinc-500 border-l-4 border-white-500 hover:bg-[#273449] rounded-xl  border mb-2 py-2 px-4 flex justify-between'>
                <h2 className=' w-1/5   rounded-full text-lg  font-medium'>Employee Name</h2>
                <h3 className='text-lg font-medium w-1/5   rounded-full   '> New Task</h3>
                <h4 className='text-lg font-medium w-1/5   rounded-full   '>Active Task</h4>
                <h5 className='text-lg font-medium w-1/5   rounded-full   '>Completed </h5>
                <h6 className='text-lg font-medium w-1/5   rounded-full   '>Failed</h6>
        </div>
        <div className=' '>
        {userData.employees.map(function(elem){

            return<div className=' bg-black-800 border-l-4 border-purple-500 hover:bg-[#273449] rounded-xl  border mb-2 py-2 px-4 flex justify-between'>
                <h2 className='text-lg font-medium w-1/5 text-white-600 px-4 py-1  rounded-full  font-medium'>{elem.firstName}</h2>
                <h3 className='text-lg font-medium w-1/5 text-blue-400 px-4 py-1  rounded-full  font-medium'> {elem.taskCounts.newTask}</h3>
                <h4 className='text-lg font-medium w-1/5 text-yellow-600 px-4 py-1  rounded-full  font-medium '>{elem.taskCounts.active}</h4>
                <h5 className='text-lg font-medium w-1/5 text-white-600 px-4 py-1  rounded-full  font-medium '>{elem.taskCounts.completed}</h5>
                <h6 className='text-lg font-medium w-1/5 text-red-600 px-4 py-1  rounded-full  font-medium '>{elem.taskCounts.failed}</h6>
            </div>
        })}
        </div>
        {/* <div className=' bg-slate-800 border-l-4 border-purple-500 hover:bg-[#273449] border rounded-xl mb-2 py-2 px-4 flex justify-between '>
            <h2>Rehan</h2>
            <h3> Make a UI design</h3>
            <h4>Status</h4>
        </div>

        <div className='bg-slate-800 border-l-4 border-emerald-500 hover:bg-[#273449] border mb-2 rounded-xl  py-2 px-4 flex justify-between '>
            <h2>Rehan</h2>
            <h3> Make a UI design</h3>
            <h4>Status</h4>
        </div>

        <div className='bg-slate-800 border-l-4 border-orange-500  hover:bg-[#273449] border rounded-xl mb-2 py-2 px-4 flex justify-between '>
            <h2>Rehan</h2>
            <h3> Make a UI design</h3>
            <h4>Status</h4>
        </div>

        

         */}
        
    
    </div>
  )
}

export default AllTask