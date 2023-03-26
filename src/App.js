import {useState} from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Foooter from './components/Foooter';
import NoContent from './components/NoContent';
import AddTask from './components/AddTask';

function App() {

  const [tasks,setTasks] = useState([
    {
      id:1,
      text:"Get the groceries",
      day:"Feb 5th at 2:30pm",
      reminder:false,
      active:false,
    },
    {
      id:2,
      text:"Have lunch at dine's day",
      day:"Feb 5th at 2:30pm",
      reminder:false,
      active:false,
    },
    {
      id:3,
      text:"Know what's cooking today's menu",
      day:"Feb 5th at 2:30pm",
      reminder:false,
      active:false,
    },
    {
      id:4,
      text:"Buy some fresh flowers for the program",
      day:"Feb 5th at 2:30pm",
      reminder:false,
      active:true,
    },
    {
      id:5,
      text:"Schedule for movies tonight",
      day:"Feb 5th at 2:30pm",
      reminder:false,
      active:true,
    },
  ]);
  const [showAddTask, setShowAddTask] = useState(false);

  const markTaskDone = (id) =>{
    const newTask = tasks.map(obj => {
      if(obj.id==id){
        console.log('id set to active')
        return {...obj, active: !obj.active};
      }
      return obj;
    });
    console.log(newTask);
    setTasks(newTask);

  }

  const deleteTask = (id) =>{ 
    console.log('delete task '+id)
    setTasks(tasks.filter((task)=> task.id !== id));
  }

  const addTask = (task)=>{
    const id = Math.floor(Math.random() * 100000);
    const newTask = {id,...task};
    setTasks([...tasks, newTask])
  }

  return (
    <div className="w-[600px] h-[800px]">
      <main className='container mx-auto border shadow rounded mt-8'>
        <div className=' px-6 py-8 '>
          {/* header */}
          <Header onAddTask={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
          {/* add tasks */}
          {showAddTask && <AddTask addTask={addTask}/>}
          {/* content */}                    
          {tasks.length?(<Content tasks={tasks} markDone={markTaskDone} onDelete={deleteTask}/>):(<NoContent />)}
        </div>        
        {/* footer */}
        <Foooter />
      </main>
      
    </div>
  );
}

export default App;
