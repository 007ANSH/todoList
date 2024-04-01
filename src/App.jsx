import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  
  const [todo, setTodo] = useState('');
  const [todos, settodos] = useState([])
  


  const saveDataLs = () => {

    localStorage.setItem("todos",JSON.stringify(todos)); 


  }

  useEffect(() => {
    let s=localStorage.getItem("todos");
    if(s){
      let newTodos=JSON.parse(s); 
    settodos(newTodos);
    }
    

  }, [])
  

  const handleChange = (e) => {
   setTodo(e.target.value) ; 
  }

  const handleAdd =  () => {
     settodos([...todos, {id:uuidv4(),todo,isCompleted:false}])
     setTodo(""); 
     console.log(todos)
     saveDataLs(); 

  }
  const handleEdit = (e, id) => {

    let newTodos = todos.filter((item)=>{
      return item.id!=id; 
    })
    let temTodo= todos.find((item)=>{
      return item.id===id ;  
    })
    // setTodo(temTodo[0].todo);
    setTodo(temTodo.todo)
    settodos(newTodos);
    saveDataLs();  
     

  }
  const handleDelete = (e) => {
    let id=e.target.id
    let ind=todos.findIndex((item)=>{
      return item.id===id; 
    })

    let newTodos=[...todos]

    newTodos.splice(ind,1); 
    settodos(newTodos)

    saveDataLs();


  }
  const handleCheck = (e) => {
    
      let newTodos = [...todos]
      
      let id=e.target.name;  
      // console.log(e.target.name)
      let ind=todos.findIndex((item)=>{
        return item.id===id;
      })
      newTodos[ind].isCompleted=!newTodos[ind].isCompleted; 
      settodos(newTodos)
      // newTodos[ind].isCompleted=!newTodos[ind].isCompleted;

  }

  return (
    <>
    <Navbar />
    <div className="container mx-auto  bg-violet-300  min-h-[80vh] p-5 ">

      <div  className="Add mx-8">
        <h1 className='text-xl'>Add a todo</h1>

        <input className='w-80' onChange={handleChange} value={todo} type="text" />
        <button className="bg-violet-600 rounded-sm py-1 px-2 mx-1 font-bold text-white " onClick={handleAdd}>Add</button>
      </div>
      <div className="yourTodos mx-auto px-8 my-4">
        <h2 className="text-xl font-bold">Your Todos</h2>
        {todos.map(item =>{
              return <div key={item.id} className="flex w-1/2 todos my-1 justify-between">
              
                <input name={item.id} onChange={handleCheck}  type="checkbox"  />

                <div className={item.isCompleted?"line-through":""} value={item.todo.isCompleted}>{item.todo} </div>
                <div className="buttons">
                  <button onClick={(e)=>handleEdit(e,item.id)} id={item.id} className="bg-violet-600 rounded-sm py-1 px-2 mx-1 font-bold text-white">Edit</button>
                  <button onClick={handleDelete} id={item.id} className="bg-violet-600 rounded-sm py-1 px-2 mx-1 font-bold text-white">Delete</button>
                </div>
              
            </div>
              
            })}


      </div>

    </div>
     
    
    </>
  )
}

export default App
