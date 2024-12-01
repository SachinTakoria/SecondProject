import React from 'react'
import "./Todo.css"


const TodoCards = ({title,body,id,del,display,updateId,toBeUpdate}) => {

  
  return (
    <div className=' todo-card container'>
      <div className='rows'>
        <h4>{title}</h4>
        <p>{body.split("",30)}...</p>
      </div>
      <div className='main-card-btn'>
      
        <button className='btn btn-primary cardBtn block'
        onClick={()=>{display("block")
          toBeUpdate=(updateId)
        }
      }
        >Update</button>
        
       
        <button 
         className='btn btn-danger cardBtn' >Delete</button>
      

      </div>
      
      
      
    </div>
  )
}

export default TodoCards
