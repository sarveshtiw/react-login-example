import React from 'react';
import * as Redux from 'react-redux';
import * as types from '../constants/ActionTypes'

const onAuthToken = (data) => ({
  type : types.USER_VERIFY,
  authenticated:data.authenticated,
  msg:data.msg
})

export const updateAuthenticated = (data) =>(dispatch)=>{
  dispatch(onAuthToken({
    authenticated:data.authenticated,
    msg:data.msg
  }))
}
