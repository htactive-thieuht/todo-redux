
export const addTodoList = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo,
    }
}
export const setActiveTodo = (todo) => {
    return {
        type: 'SET_ACTIVE_TODO',
        payload: todo,
    }
}
export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    }
}
export const updateTodo = (id, title) => {
    return {
        type: 'UPDATE_TODO',
        payload: {
            id, title
        }
    }
}
export const viewCheck = (id, checked) => {
    return{
        type:'CHECK_COMPLETED',
        payload: {
            id, 
            checked
        }
    }

}
