import ToDoContainer from "./TodoContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import AppModal from "./AppModal";

import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [task, setTask] = useState({ id: "", desc: "" });

  const openModal = () => { setTask(""); setShow(true); };
  const setModal = (item) => { setTask(item); setShow(true); };

  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <h1 className="row col-10 justify-content-center">TO DO APP</h1>
        <button className="col-2 btn btn-primary" onClick={openModal}>
          Add Task
        </button>
      </div>
      <ToDoContainer setModal={setModal} />
      <AppModal show={show} setShow={setShow} task={task} setTask={setTask} />
    </div>
  );
}

export default App;
