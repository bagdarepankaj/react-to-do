let id = 1;
const initialValue = {
    tasks: [{
        id: id,
        desc: "First Task"
    }]
}

function reducer(state = initialValue, action) {
    if (action.type === 'ADD') {
        id = id + 1;
        return {
            tasks: [
                ...state.tasks,
                { id: id, desc: action.payload.desc }
            ]
        };
    }
    else if (action.type === "UPDATE") {
        const task = state.tasks.find((task) => task.id === action.payload.id)
        task.desc = action.payload.desc
        return state
    }
    // else if (action.type === 'DELETE') {
    //     return state.reduce(task => task.id !== action.payload.id);
    // }
    else {
        return state;
    }
}

export default reducer;
