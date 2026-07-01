import React from 'react'
import AcceptTask from './AcceptTask'
import CompletedTask from './CompletedTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'


const TaskList=({data})=> {
  console.log(data);
  
  return (  
    <div id='tasklist' className='h-[55%] flex items-center justify-start gap-5 w-full flex-nowrap overflow-x-auto py-5 rounded-xl mt-10'>
        {data.tasks.map((elem, idx)=>{
            if(elem.active){
              return <AcceptTask key={idx} data={elem}/>
            }if(elem.newTask){
              return <NewTask key={idx} data={elem}/>

            }if(elem.completed){
              return <CompletedTask key={idx} data={elem}/>
            }if(elem.failed){
              return <FailedTask key={idx} data={elem}/>
            }
          
        })}
    </div>
  )
}

export default TaskList
