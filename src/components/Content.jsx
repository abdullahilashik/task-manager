import React, {useState} from 'react'
import TaskItem from './TaskItem'

const Content = ({tasks, markDone, onDelete}) => {    
  return (  
    <div className='py-8'>            
      <ul className="flex flex-col gap-4">
        {tasks.map((task)=>{
          {/* task item */}
          return <TaskItem active={task.active} task={task} key={task.id} markDone={markDone} onDelete={onDelete}/>
        })}        
      </ul>
    </div>
  )
}

export default Content
