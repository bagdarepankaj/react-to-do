import ToDoContainer from "./TodoContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import AppModal from "./AppModal";

import { useState } from "react";

function App() {
  const [show, setShow] = useState(false)
  const openModal = () => setShow(true)
  // const myState = useSelector((state) => state.reducer);
  return (
    <div className="container mt-5">
      <div className="row">
        <h1 className="row col-10 justify-content-center">Hello World</h1>
        <button className="col-2 btn btn-primary" onClick={openModal}> Add Task </button>
      </div>
      <ToDoContainer />
      <AppModal show={show} setShow={setShow}/>
    </div>
  );
}

export default App;
