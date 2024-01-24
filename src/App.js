import './App.css';
import Header from './Components/Header';
import Showtask from './Components/Showtask';
import Addtask from './Components/Addtask';
import { useEffect, useState } from 'react';

function App() {
  const [tasklist, setTasklist] = useState(() => {
    // Retrieve the tasklist from localStorage, or an empty array if not present
    const storedTaskList = localStorage.getItem("tasklist");
    return storedTaskList ? JSON.parse(storedTaskList) : [];
  });

  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);

  return (
    <div className="App">
      <Header />
      <Addtask
        tasklist={tasklist}
        addTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
      <Showtask
        tasklist={tasklist}
        addTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
 