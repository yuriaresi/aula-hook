import { useState } from "react";
import { TodoCard } from "./components/TodoCard";

function App() 
{
  const [todoList, setTodoList] = useState([
    'Tarefa 1', 'x - Tarefa 2', 'Tarefa 3','Tarefa 4'
  ]);

  const [dueDate, setDueDate]  = useState(new Date());

  function addTasks() 
  {
    const newList = [...todoList];

    for(let i=5; i<100; ++i) 
    {
      const x = i % 5 ? "x - " : "";
      newList.push(`${x}Tarefa ${i}`);
    }
    setTodoList(newList);
  }

  function changeDate() 
  {
    setDueDate(new Date());
  }
    
  return (
    <>
      <TodoCard todos={todoList} dueDate={dueDate}/>
      <br/>
      <button onClick={() => addTasks()}>Add Tasks</button>
      <button onClick={() => changeDate()}>Change Due Date</button>
    </>
  )
}

export default App
