import React from 'react';
import {FaTimes} from 'react-icons/fa';

const TaskItem = ({active,task, markDone, onDelete}) => {
  const statusChange = (id)=>{
    console.log(id);
  }
  return (
    <div>
      <li className={`bg-gray-50 px-6 py-2 rounded border shadow flex items-center justify-between hover:shadow-sm ${active?'active-list-item':''} hover:bg-opacity-80 cursor-pointer hover:drop-shadow-xl`}>
        <div className='flex gap-4 items-center'>
            <input type="checkbox" name="status" id="status" checked={active?'checked':''} onChange={()=>markDone(task.id)}/>
            <div className="flex flex-col">
            <h3 className="font-light text-xl capitalize">{task.text}</h3>
            <p className='text-xs font-extralight'>{task.day}</p>
            </div>
        
        </div>
        {/* <a href="#" className="text-xs font-medium text-lime-600 status">completed</a> */}
        <FaTimes className={`${task.active?'text-gray-100':'text-red-400'}`} onClick={()=>onDelete(task.id)}/>
      </li>
    </div>
  )
}

export default TaskItem
