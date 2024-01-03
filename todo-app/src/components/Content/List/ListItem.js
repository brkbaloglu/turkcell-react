import React from 'react'
import {useTodo} from '../../../contexts/TodoContext' 
function ListItem({todo}) {
 
  const { todos, setTodos, destroyTodo } = useTodo()

  const onChange = (id) => {
    destroyTodo(id) 
  }

  const onDestroy = (id) => {
    const cloned_todos = [...todos]

    const itemIndex = cloned_todos.findIndex((todo) => todo.id === id)

    cloned_todos.splice(itemIndex, 1)
    setTodos(cloned_todos)

  }


  return (
    <li key={todo.id} className={todo.completed ? "completed" : ""}>
                <div className="view">
                    <input onChange={() => onChange(todo.id)} type="checkbox" checked={todo.completed} name="" id="" className="toggle" />
                    <label >{todo.text}</label>
                    <button className="destroy" onClick={() => onDestroy(todo.id)}></button>
                </div>
            </li>
  )
}

export default ListItem