import React from 'react'

const Titles = ({title,Icon}) => {
  return (
    <div className='w-full flex sm:gap-4 items-center '>
      <Icon className='text-3xl  sm:w-6 sm:h-6 w-4 h-4 text-subMain'/>
      <h2 className="text-xl font-bold capitalize">{title}</h2>
    </div>
  )
}

export default Titles
