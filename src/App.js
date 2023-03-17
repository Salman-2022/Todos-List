// import logo from './logo.svg';
import './App.css';
import Header from './myComponent/Header';
import {AddTodos} from './myComponent/AddTodos';
import {Footer} from './myComponent/Footer';
import { Todos } from './myComponent/Todos';
import React,{ useState } from 'react';



function App() {
  let initTodo;
  if(localStorage.getItem('todos')===null){
    initTodo=[]
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  

// making a fuction which will be called 
  const onDelete=(todo)=>{
    console.log(todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem('todos',JSON.stringify(todos));
  }

  const addTodo=(title,desc)=>{
    let sno;
    if(todos.length===0){
      sno=0;
    }else{
      sno = todos[(todos.length)-1].sno+1
    }
    const myTodo={
      sno: sno,
      title: title,
      desc:desc
    }
    setTodos([...todos,myTodo])
    console.log(myTodo)

    localStorage.setItem('todos',JSON.stringify(todos));
    
  }

  //using a hook called useState
  const [todos,setTodos] = useState(initTodo);  

  return (
    <>
    
    
    <Header title='My Todos'/>
    <center>
    <AddTodos addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </center>
    
    </>
  );
}

export default App;
