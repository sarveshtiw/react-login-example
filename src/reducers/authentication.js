// This file is used for auth reducers
import { USER_VERIFY } from '../constants/ActionTypes'

export const initialState = {
    authenticated: false,
    msg: ''
};

const auth = (state = initialState, action) => {
    switch (action.type) {

        case USER_VERIFY:
            state.authenticated = action.authenticated
            state.msg = action.msg
            return {
                ...state
            }
        default:
            return {
                ...state
            }
    }
}

export default auth
