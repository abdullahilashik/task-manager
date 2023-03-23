import React from 'react'
import TaskItem from './TaskItem'

const Content = () => {
  return (
    <div className='py-16'>
      
      <ul className="flex flex-col gap-4">
        {/* task item */}
        <TaskItem active={true}/>
        {/* task item */}
        <TaskItem active={false}/>
        {/* task item */}
        <TaskItem active={true}/>
      </ul>
    </div>
  )
}

export default Content
