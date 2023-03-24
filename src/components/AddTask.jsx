import React, {useState} from 'react'

const AddTask = ({addTask}) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const formSubmit = (e) =>{
        e.preventDefault();
        addTask({text,day,reminder})
    }

  return (
    <div className='py-8 space-y-4 border border-dotted p-4 mt-4 shadow hover:shadow-lg rounded drop-shadow ease-in transition'>
        <p className='font-extralight text-gray-500 text-xl'>Fill up the below form to add a new task in your to-do list. Make sure you provide the valid date in order to stay up to date and stay ahead of your schedule.</p>
        <form action="#" className='space-y-4' onSubmit={(e)=>formSubmit(e)}>
            <div className="flex gap-2 flex-col">
                <label htmlFor="text">Add a new task</label>
                <input value={text} type="text" id='text' placeholder='add task' className='border px-4 py-1 rounded shadow' onChange={(e)=>{setText(e.target.value); console.log(e.target.value)}}/>
            </div>
            <div className="flex gap-2 flex-col">
                <label htmlFor="day">Add a date to your task</label>
                <input type="text" id='day' placeholder='add date to your task' className='border px-4 py-1 rounded shadow' value={day} onChange={(e)=>{setDay(e.target.value); console.log(e.target.value)}}/>
            </div>
            <div className="flex gap-2 flex-col">
                <label htmlFor="reminder">Would you like as a reminder?</label>
                <select name="reminder" id="reminder" className='border px-4 py-1 rounded shadow' onChange={(e)=>{setReminder(e.target.value===1?true:false); console.log(e.target.value)}}>
                    <option value="false">Choose an option</option>
                    <option value="1">Yes, remind me about the task due date.</option>
                    <option value="0">No, do not remind me of anything!.</option>
                </select>
            </div>
            <div className="flex gap-2">
            <button type="submit" className='px-6 py-2 rounded shadow bg-lime-500 text-white font-medium'>Add New Task to List</button>
            <button type="reset" className='px-6 py-2 rounded shadow bg-red-500 text-white font-medium'>Cancel Process</button>
            </div>
        </form>
    </div>
  )
}

export default AddTask