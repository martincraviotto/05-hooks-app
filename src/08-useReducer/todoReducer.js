export const todoReducer = (initalState=[], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initalState,action.payload]
        default:
            return initalState;
    }
}