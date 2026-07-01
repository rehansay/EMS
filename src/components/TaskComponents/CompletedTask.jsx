import React from 'react'

const CompletedTask = ({data}) => {
  return (
        <div className='flex-shrink-0 h-full w-75 bg-slate-900 p-5 rounded-xl'>
            <div className='flex justify-between  items-center'>
              <h3 className='bg-red-500 text-sm px-3 py-1 rounded'>High</h3>
              <h4 className='text-sm'>20 June 2026</h4>
            </div>

            <h2 className='mt-5 text-2xl font-semibold'>Make a repository</h2>
            <p className='text-sm mt-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus porro tempore earum, eveniet enim odit maiores vero unde rem quia? Eos perferendis nihil natus inventore facere architecto tempora culpa consequuntur?
            </p>

            <div className='mt-2'>
                <button className='w-full bg-green-600 rounded font-medium py-1 px-2 text-xs'>Completed</button>
            </div>

        </div>
  )
}

export default CompletedTask