import React from 'react'
import TodoItems from './TodoItems'

export const Todos = (props) => {

  return (
    <div>

      <h3>ToDo List</h3><br/>
      {/* <TodoItems todo={props.todos[0]}/> */}
      {props.todos.length==0? <h6>no todos found</h6>:
      props.todos.map((todo)=>{
        return <TodoItems todo={todo} onDelete={props.onDelete}/>
      })}
      

    </div>
  )
}