import React, {useState} from "react";

function App(){
  const [newTask, setTask] = useState("");
  const [list, setList] = useState([]);

  function saveTask(event){
    const task = event.target.value;
    setTask(task)
  }

  function saveList(){
    setList(prev=>{
      return [
        ...prev,
        newTask
      ]
    })

    setTask("")
  }




    return <div className="container">
    <div className="heading">
      <h1>TASK MANAGER</h1>
    </div>
    <div className="form">
      <input
      onChange={saveTask}
      value={newTask}
      ></input>
      <button onClick={saveList}><span>Add</span></button>
    </div>
    <ul>{list.map(el => <li>{el}</li>)}</ul>
    </div>
}

export default App