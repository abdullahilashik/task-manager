import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between'>
      <h3 className="font-medium text-xl">Task Manager</h3>
      <a href="#" className='px-6 py-2 bg-lime-500 text-white rounded shadow hover:bg-opacity-80 transition duration-200'>Add</a>
    </header>
  )
}

export default Header
