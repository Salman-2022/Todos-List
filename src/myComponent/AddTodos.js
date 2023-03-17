import React,{ useState } from 'react';

export const AddTodos = ({addTodo}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit=(e)=>{
    e.preventDefault();
    if(!title || !desc){
      alert('Title or description cannot be found')
    }
    addTodo(title,desc)
  }
  return (
    <>
    <div className='container my-5'>
      <h4>Add a Todo</h4>
        <form onSubmit={submit}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">Todo Title</label>
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
      <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
    </div>
    <button type="submit" className="btn btn-sm btn-success">Submit</button>
  </form>
    </div>
    </>
  )
}
