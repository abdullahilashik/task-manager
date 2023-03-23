import React from 'react'

const TaskItem = ({active}) => {
  return (
    <div>
      <li className={`bg-gray-50 px-6 py-2 rounded border shadow flex items-center justify-between hover:shadow-sm ${active?'active-list-item':''}`}>
        <div className='flex gap-4 items-center'>
            <input type="checkbox" name="status" id="status" />
            <div className="flex flex-col">
            <h3 className="font-light text-xl capitalize">get the grocery according to the list.</h3>
            <a href='#' className="text-xs py-1">Click to see more</a>
            </div>
        
        </div>
        <a href="#" className="text-xs font-medium text-lime-600 status">completed</a>
      </li>
    </div>
  )
}

export default TaskItem
