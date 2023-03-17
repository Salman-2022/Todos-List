import React from 'react'

function TodoItems({todo,onDelete}) {
  return (
    <>
    <div className='test'>
        <h2 className=''>{todo.title}</h2>
        <p>{todo.desc}</p>
        <button className='btn btn-sm btn-danger' onClick={()=>{
          onDelete(todo)
        }}>Delete</button>
    </div>
    </>
  )
}

export default TodoItems
