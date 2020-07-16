

const initialState = {
    list: [],
    activeId: null,
    viewCheckbox: false
}
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            const newList = [...state.list];
            newList.push(action.payload);
            return {
                ...state,
                list: newList,
            }
        }
        case 'SET_ACTIVE_TODO': {
            return state;
        }
        case 'DELETE_TODO': {
            const newList = [...state.list.filter(todoId => todoId.id !== action.id)];
            return {
                ...state,
                list: newList,
            }
        }
        case 'UPDATE_TODO': {
            let newList = [];
            let { payload } = action
            newList = (state.list || []).map(item => {
                if (item.id === payload.id) {
                    return { ...item, title: payload.title }
                }
                return item
            })
            return {
                ...state,
                list: newList,
            }
        }
        default:
            return state;
    }
}
export default todoReducer;
