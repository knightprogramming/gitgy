/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element'
import { PageViewElement } from './page-view-element.js'
import { connect } from 'pwa-helpers/connect-mixin'

// This element is connected to the Redux store.
import { store } from '../../store'

// These are the actions needed by this element.
import { startSignup } from '../../actions/auth'
import { navigate } from '../../actions/app'

// These are the shared styles needed by this element.
import { SharedStyles } from '../shared-styles.js'
import { ButtonSharedStyles } from '../button-shared-styles'
import { AuthViewsStyles } from './auth-views-styles'

// These are the elements needed by this element.
import '@polymer/iron-form/iron-form'
import '../base/loading-element'

// style inspiration: https://dribbble.com/shots/5198105 & https://codepen.io/abergin/pen/jIplf/?editors=1100

class SignUpView extends connect(store)(PageViewElement) {
  render() {
    return html`
      ${SharedStyles}
      ${ButtonSharedStyles}
      ${AuthViewsStyles}
      <section>
        ${this._loading ? html`<loading-element></loading-element>` : ''}
        ${
          !this._user
            ? html`
              <h2>Hey there!</h2>
              <p>Enter an email and password to signup</p>
              ${
                this._signUpFailure
                  ? html`<p class="login-error">Invalid email or password</p>`
                  : ''
              }
              <iron-form>
                <form>
                  <div>
                    <input id="email" name="email" type="email" required @input=${e =>
                      (this._email = e.target.value) && this._isValid(e)}>
                    <label for="email" class="${
                      !this._email
                        ? ''
                        : this._email.length > 0
                          ? 'hasText'
                          : ''
                    }">
                      E-Mail
                    </label>
                  </div>
                  <div>
                    <input id="password" name="email" type="password" minlength="8" required @input=${e =>
                      (this._password = e.target.value) && this._isValid(e)}>
                    <label for ="email" class="${
                      !this._password
                        ? ''
                        : this._password.length > 0
                          ? 'hasText'
                          : ''
                    }">
                      Password
                    </label>
                  </div>
                  <button class="btn" type="button" @click="${
                    this._signUp
                  }" disabled>Sign Up</button>
                </form>
              </iron-form>
              <p class="forgot">Forgot your password? <a href="/reset">Reset here</a></p>
            `
            : this._isLoggedIn()
        }
      </section>
    `
  }

  static get properties() {
    return {
      _loading: {
        type: String,
        statePath({ auth }) {
          return auth.loading
        }
      },
      _user: {
        type: String,
        statePath({ auth }) {
          return auth.uid
        }
      },
      _signUpFailure: {
        type: Boolean,
        statePath({ auth }) {
          return auth.signUpFailure
        }
      },
      _email: String,
      _password: String
    }
  }

  _signUp() {
    console.log('yup')
    const email = this.shadowRoot.querySelector('#email')
    const password = this.shadowRoot.querySelector('#password')
    if (email.validity.valid && password.validity.valid) {
      store.dispatch(startSignup(email.value, password.value))
      this._email = ''
      this._password = ''
    }
  }

  _isLoggedIn() {
    window.history.pushState({}, '', '/')
    store.dispatch(navigate('/'))
  }

  _isValid(e) {
    const isValid =
      this.shadowRoot.querySelector('#email').validity.valid &&
      this.shadowRoot.querySelector('#password').validity.valid

    isValid
      ? (this.shadowRoot.querySelector('.btn').disabled = false)
      : (this.shadowRoot.querySelector('.btn').disabled = true)
  }

  stateChanged({ auth }) {
    this._loading = auth.loading
    this._user = auth.uid
    this._signUpFailure = auth.signUpFailure
  }
}

window.customElements.define('signup-view', SignUpView)
