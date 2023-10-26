import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { addTask } from '../app/action'


function AppModal(props) {

  // const myState = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  return (
    <div className="modal" style={{ display: props.show ? "block" : "none" }}>
      <div className="modal-dialog" id="item">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add New Item</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => props.setShow(false)}
            ></button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
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
            <button type="button" className="btn btn-primary" onClick={() => dispatch(addTask('test'))}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppModal;
