// This file is used for login reducers
import { 
    ON_CHANGE_FIELD, 
    ON_VALIDATION, 
    ON_CHANGE_MSG } from '../constants/ActionTypes'

  // Initialize states
  const initialState = {
    field:{
        username:'',
        password:''
    },
    error:{
        username:'',
        password:''
    },
    msg:''
  }

  // Event Handler
  const login = (state = initialState, action) => {

    switch (action.type) {

      case ON_CHANGE_FIELD:
        state.field[action.field] = action.value
        return {
            ...state,
            data:state.field,
            error:state.error,
            msg:state.msg
        }
        case ON_VALIDATION:
            state.error = action.error
            state.msg = action.msg
            return {
                ...state,
                error:state.error,
                msg:state.msg
            }
        case ON_CHANGE_MSG:
            state.msg = action.msg
            return {
                ...state,
                msg:state.msg
            }
      default:
        return {
          ...state
        }
    }
  }

  export default login 
