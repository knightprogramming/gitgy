/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

export const START_LOGIN = 'START_LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT = 'LOGOUT'

export const startLogin = (email, password) => (dispatch, getState) => {
  dispatch({ type: START_LOGIN })

  setTimeout(() => {
    const emailCheck = 'test@test.com'
    const passwordCheck = 'test'

    if (email === emailCheck && password === passwordCheck) {
      const uid = 'abc123'
      dispatch(loginSuccess(uid))
    } else {
      dispatch(loginFailure())
    }
  }, 3000)
}

export const loginSuccess = uid => ({ type: LOGIN_SUCCESS, uid })

export const loginFailure = () => ({ type: LOGIN_FAILURE })

export const logout = () => ({ type: LOGOUT })
