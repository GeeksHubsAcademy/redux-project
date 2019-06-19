function userReducer(state = {}, action) {
    switch (action.type) {
        case 'REGISTER':
            return {
                ...state,
                user:action.payload
            } ;
        case 'GET_ALL':
            return {
                ...state,
                users:action.payload
            }
        default:
            return state
    }
}

export default userReducer;