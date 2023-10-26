function addTask(desc) {
    return {
        type: "ADD",
        payload: {
            desc: desc
        }
    }
}

function updateTask(id, desc) {
    return {
        type: "UPDATE",
        payload: {
            id: id,
            desc: desc
        }
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