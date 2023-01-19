export const todoReducer = (initalState=[], action) => {
    switch (action.type) {
        case 'ABC':
            throw new Error('Action.type=ABC no está implementada');
        default:
            return initalState;
    }
}