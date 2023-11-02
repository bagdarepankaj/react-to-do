import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../app/action";

function AppModal(props) {
  const dispatch = useDispatch();

  const submitForm = (event) => {
    event.preventDefault();
    if (props.task.id) {
      dispatch(updateTask(props.task));
    } else {
      dispatch(addTask(props.task.desc));
    }
    props.setShow(false);
    props.setTask({ id: "", desc: "" });
  };

  return (
    <div className="modal" style={{ display: props.show ? "block" : "none" }}>
      <div className="modal-dialog" id="item">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add New Task</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => props.setShow(false)}
            ></button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              id="task"
              className="form-control"
              placeholder="Enter Text"
              key={props.task ? props.task.id : ""}
              value={props.task.desc}
              onChange={(e) =>
                props.setTask({ id: props.task.id, desc: e.target.value })
              }
            ></input>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => props.setShow(false)}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={(e) => submitForm(e)}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppModal;
