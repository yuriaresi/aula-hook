import { useMemo } from "react";
import styled from "styled-components";

const Container = styled.div`

h1 {
  font-size: 2rem;
}

section {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  h5 {
    background-color: gray;
    padding: 5px;
    margin: 0px;
  }
}

`;

interface TodoCardProps 
{
  todos: string[];
  dueDate: Date;
}

export function TodoCard(props: TodoCardProps) 
{

  function filterTodos(todos: string[]) 
  {
    console.log("filtrou");
    return todos.filter(todo => !todo.startsWith('x'));
  }

  // Só filtra a lista quando ela mudar.
  // Alterar somente a data, não executa o filtro.
  const filteredTodos = useMemo(
    () => filterTodos(props.todos)
    ,
    [props.todos]
  );

  return (
    <Container>
      <h1>
        Due date: {props.dueDate.toDateString() + ' @ ' + props.dueDate.toTimeString()}
      </h1>
      <section>
        {
          filteredTodos.map((todo) => (
            <h5>{todo}</h5>
          ))
        }
      </section>
    </Container>
  )
}