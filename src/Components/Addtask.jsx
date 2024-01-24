import React from 'react'

const Addtask = ({tasklist, addTasklist, task, setTask}) => {
    
    const handlesubmit = (e) => {
        e.preventDefault();
      
        if (task.id) {
          const updatetask = tasklist.map((todo) =>
            todo.id === task.id ? { id: task.id, name: e.target.task.value } : todo
          );
          addTasklist(updatetask);
          setTask({}); // Clear the task after updating tasklist
        } else {
          const date = new Date();
          const newTask = {
            id: date.getTime(),
            name: e.target.task.value,
          };
          addTasklist([...tasklist, newTask]);
          setTask({}); // Clear the task after adding a new task
        }
      };
      
  return (
   <section className='addTask'> 
   <form onSubmit={handlesubmit}>
     <input type="text" onChange={e => setTask({...task, name: e.target.value})} name='task' autoComplete='off' placeholder='Addtask' value={task.name || ""}/>
     <button type='submit'>{task.id ? "update" : "add"}</button>
   </form>

   </section>
  )
}

export default Addtask
