function userReducer(state = {}, action) {
    switch (action.type) {
        case 'REGISTER':
            return {
                ...state,
                user:action.payload
            } ;
        default:
            return state
    }
}

export default userReducer;