
import React, { useEffect, useState } from 'react'
import axios  from 'axios'
import { toast } from 'react-toastify'

const Update = ({display,update}) => {
  useEffect(()=>{
setinput( {title:update.title,body:update.body})
  },[update])
  const[input,setinput]=useState({title:"",body:""})
  function set(e){
    setinput({...input,[e.target.name]: e.target.value})
}
 async function submit(){
  await axios.put(`http://localhost:2010/api/v2/updateTask/${update.id}`,input).then((response)=>
    {toast.success("task updated")})
  
  display("none")
}
  return (
    <div className=' updateMAindiv '>
      <h3>update your task</h3>
      <input className='todo-inputUpdate form-control'name='title' type="text" onChange={set} value={input.title} />
      <textarea className='todo-inputArea form-control' name='body' onChange={set} value={input.body}></textarea>
      <div>
        <button className='btn btn-dark updatebtns ' onClick={submit}>UPDATE</button>
      <button className='btn btn-danger updatebtns ' onClick={()=>{display("none")}}>Close</button>
      </div>
    </div>
  )
}

export default Update
