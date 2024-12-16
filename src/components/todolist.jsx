import React, { useState } from 'react'

function TodoList() {
  const [Task,setTask]=useState({id:"",text:""});
  const [Tasks,setTasks]=useState([]);
  const [isEditing,setIsEditing]=useState({status:false,id:"",text:""});
  const AddTask=()=>{
    const newTask={...Task,id:Date.now().toString()}
    if(newTask.text==="") return;
    setTasks([...Tasks,newTask]);
    setTask({id:"",text:""});
  }

  const EditTask=(id)=>{
      Tasks.map((t)=>{
        if(t.id===isEditing.id){
          t.text=isEditing.text;
        }
      });
      setIsEditing({status:false,id:"",text:""});

  }
  
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <h1>To Do List</h1>
      <input type="text" value={Task.text} onChange={(e)=>setTask({...Task,text:e.target.value})} />
      <button onClick={AddTask}>Add Task</button>
      <ul>
        {Tasks.map(task=>(
          <div key={task.id}> 
          <p>{task.text}</p> 
          <button onClick={()=>{setTasks(Tasks.filter((t)=>t.id!==task.id))}}>Delete</button>
          <button onClick={() => setIsEditing({ status: true, id: task.id })}>Edit</button>
{isEditing.status && isEditing.id === task.id && (
  <div>
    <h3>Editing Box</h3>
    <input
      type="text"
      value={isEditing.text}
      onChange={(e) => setIsEditing({ ...isEditing, text: e.target.value })}
    />
    <button onClick={() => EditTask(task.id)}>Save</button>
  </div>
)}

          </div>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
