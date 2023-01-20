export const todoReducer = (initalState=[], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initalState,action.payload]

        case '[TODO] Remove Todo':
            return initalState.filter((todo)=>todo.id !== action.payload);
            
        default:
            return initalState;
    }
}