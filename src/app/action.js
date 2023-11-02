function addTask(desc) {
    return {
        type: "ADD",
        payload: {
            desc: desc
        }
    }
}

function updateTask(task) {
    return {
        type: "UPDATE",
        payload: task
    }
}

function deleteTask(id) {
    return {
        type: "DELETE",
        payload: {
            id: id
        }
    }
}

export { addTask, updateTask, deleteTask };