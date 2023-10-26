import { useSelector } from "react-redux";

function ToDoContainer() {
  const myState = useSelector((state) => state.tasks);
  // console.log(myState)

  return (
    <ul className="list-group list-group-flush">

      {myState.map(task => {
        return (<li className="list-group-item" key={task.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{task.desc}</h5>
            </div>
          </div>
        </li>)
      })}

    </ul>
  );
}

export default ToDoContainer;
