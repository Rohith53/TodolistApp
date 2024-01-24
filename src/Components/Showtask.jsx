import React from 'react'

const Showtask = ({tasklist, addTasklist, task, setTask}) => {

    const handledelete = (id) =>{
        const updatedlist = tasklist.filter(todo => todo.id !== id)
        addTasklist(updatedlist)
    }
    const handleedit = (id) =>{
        const selected = tasklist.find(todo => todo.id === id)
        setTask(selected) 
    }
  return (
    <section className='showTask'>
        <div className="head">
            <div>
                <span className='title'>Todo</span>
                <span className='count'>{tasklist.length}</span>
            </div>
            <button className='clearAll' onClick={()=> addTasklist([])}>clear all</button>
        </div>
        <ul>
            {tasklist.map((todo)=>(
                <li key={todo.id}>
                <p>
                    <span className='name'>{todo.name}</span>
                </p>
                <i className='bi bi-pencil-square' onClick={()=>handleedit(todo.id)}></i>
                <i className='bi bi-trash' onClick={()=>handledelete(todo.id)}></i>
            </li>
            ))}
            
        </ul>
    </section>
  )
}

export default Showtask
