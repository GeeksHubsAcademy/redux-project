function userReducer(state = {}, action) {
    switch (action.type) {
        case 'LOGIN':
            return state ;
        case 'LOGOUT':
            return state ;
        default:
            return state
    }
}

export default userReducer;