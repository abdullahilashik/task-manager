import React from 'react'

const Header = ({onAddTask, showAdd}) => {  
  return (
    <header className='flex justify-between'>
      <h3 className="font-medium text-xl">Task Manager</h3>
      <button className={`px-6 py-2 ${showAdd?'bg-red-500':'bg-lime-500'} text-white font-medium rounded shadow hover:bg-opacity-80 transition duration-200`} onClick={onAddTask}>{showAdd?'Close':'Add'}</button>
    </header>
  )
}

export default Header
