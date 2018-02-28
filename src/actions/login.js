import React from 'react';
import * as Redux from 'react-redux';
import * as types from '../constants/ActionTypes'

// Set profile
export const onChange = (event, index, value) => (dispatch) => {

    dispatch(onChangeDispatch({
        field:event.target.name,
        value:event.target.value
    }))
}

const onChangeDispatch = (data) => ({
    type: types.ON_CHANGE_FIELD,
    field: data.field,
    value:data.value
})

export const validate = (data) => (dispatch) =>{

    let error ={
            username:'',
            password:''
        },
        msg =''

    if(!data.username)
    {
        error.username ='Username cannot be blank!'
    }

    if(!data.password)
    {
        error.password ='Password cannot be blank!'
    }
    if(data.password && data.username)
    {
        msg = ''
    }
    dispatch(onValidateDispatch(error, msg))
}

const onValidateDispatch = (error, msg) => ({
    type: types.ON_VALIDATION,
    error: error,
    msg:msg
})

// Update MSG
export const onUpdateMsg = (msg) => (dispatch) => {

    dispatch(onUpdateMsgDispatch({
        msg:msg
    }))
}

const onUpdateMsgDispatch = (data) => ({
    type: types.ON_CHANGE_MSG,
    msg: data.msg
})