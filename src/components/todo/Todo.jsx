import React, { useCallback, useEffect, useState } from "react";
import "./Todo.css";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./Update";
import axios from "axios";
let id = sessionStorage.getItem("id");
let toUpdateArray=[]

const Todo = () => {
  const [input, setinput] = useState({
    title: "",
    body: " ",
  });
  const [array, setArray] = useState([]);
  const [showUpdate, setShowUpdate] = useState(false);
  const change = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };

  const Show = () => {
    document.getElementById("textarea").style.display = "block";
  };

 const Add=useCallback(async ()=>{
    if (input.title === "" || input.body === "") {
      toast.error("Title or body should not be empty");
    } else {
      if (id) {
        try {
          await axios.post("http://localhost:2010/api/v2/addTask", {
            title: input.title,
            body: input.body,
            id: id,
          });
          setinput({ title: "", body: "" });
          
          toast.success("Your task is added");
         
        } catch (error) {
          toast.error("Error adding task");
        }
      } else {
        
        setinput({ title: "", body: "" });
        toast.error("Your task is not added! Please Signup.");
      }
    }
  },[input])

const del = async (taskId) => {
    try {
      await axios.delete(`http://localhost:2010/api/v2/deleteTask/${taskId}`, { data: { id: taskId } }).then(()=>{
        toast.success("your task is deleted")
      })

    } catch (error) {
      toast.error("Pls Signup first");
    }
  };

  const dis = (value) => {
    setShowUpdate(value === 'block');
  };
  function update(value){
    toUpdateArray=array[value]

  }
  
  useEffect(() => {
    if(id){
     async  function fetch(){
       
          await axios.get(`http://localhost:2010/api/v2/getTask/${id}`).then((response)=>{
          setArray(response.data.list)
          })
        
        } 
     
      fetch()}
       
    },[Add]);

 

  return (
    <div className="todo">
      <ToastContainer />
      <div className="todo-main container ">
        <div className=" todo-inputs-div">
          <input
            type="text"
            placeholder="Title"
            className="title todo-inputs"
            onClick={Show}
            name="title"
            value={input.title}
            onChange={change}
          />
          <br />
          <textarea
            type="text"
            name="body"
            placeholder="Body"
            id="textarea"
            value={input.body}
            onChange={change}
            className="body todo-inputs"
          />
        </div>
       <div className="addbtnmain">
         <button className="Addbtn btn btn-info" onClick={Add}>
          Add
        </button>
        </div>
      </div>
      <div className="todo-body">
        <div className="container-fluid">
          <div className="row">
            {array.map((item, index) => (
              <div className="col-md-3 col-11 mx-lg-5 mx-3 my-2" key={index}>
                <TodoCards
                  title={item.title}
                  body={item.body}
                  id={item._id}
                  del={del}
                  display={dis}
                  updateId={index}
                  toBeUpdate={update}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {showUpdate && (
        <div className="todo-update">
          <div className="container">
            <Update display={dis} update={toUpdateArray} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
