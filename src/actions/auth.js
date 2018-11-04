/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { signUp } from '../api/user'

export const START_SIGNUP = 'START_SIGNUP'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'

export const START_LOGIN = 'START_LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const LOGOUT = 'LOGOUT'

export const startSignup = (name, email, password) => (dispatch, getState) => {
  dispatch({ type: START_SIGNUP })

  signUp({ name, email, password }).then(data => {
    if (data.error) {
      console.log('error', data.error)
      dispatch(signUpFailure())
    } else {
      console.log('no error', data)
      const uid = 'abc123'
      dispatch(signUpSuccess(uid))
    }
  })
}

export const startLogin = (email, password) => (dispatch, getState) => {
  dispatch({ type: START_LOGIN })

  setTimeout(() => {
    const emailCheck = 'test@test.com'
    const passwordCheck = 'testtest'

    if (email === emailCheck && password === passwordCheck) {
      const uid = 'abc123'
      dispatch(loginSuccess(uid))
    } else {
      dispatch(loginFailure())
    }
  }, 3000)
}

export const signUpSuccess = uid => ({ type: SIGNUP_SUCCESS, uid })

export const loginSuccess = uid => ({ type: LOGIN_SUCCESS, uid })

export const signUpFailure = () => ({ type: SIGNUP_FAILURE })

export const loginFailure = () => ({ type: LOGIN_FAILURE })

export const logout = () => ({ type: LOGOUT })
