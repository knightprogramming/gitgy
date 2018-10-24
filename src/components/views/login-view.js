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
import { startLogin } from '../../actions/auth'
import { navigate } from '../../actions/app'

// These are the shared styles needed by this element.
import { SharedStyles } from '../shared-styles.js'

// These are the elements needed by this element.
import '@polymer/iron-form/iron-form'
import '../base/loading-element'

class LoginView extends connect(store)(PageViewElement) {
  render() {
    return html`
      ${SharedStyles}
      <style>
        h2 {
          margin-bottom: 0;
        }
        p {
          margin-bottom: 0;
          text-align: center;
        }
        input, label, button {
          transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
        }
        form {
          box-sizing: border-box;
          margin: 0 auto;
          padding: 0px 25px 30px 25px;
          position: relative;
          width: 270px;
        }
        form div {
          position: relative;
          width: 100%;
        }
        input {
          border: 1px solid #E91E63;
          border-radius: 60px;
          box-sizing: border-box;
          color: #E91E63;
          margin-top: 30px;
          padding: 10px 15px;
          width: 100%;
        }
        input:focus {
          background: #E91E63;
          color: white;
          outline: none;
        }
        input:valid {
          margin-top: 30px;
        }
        input:focus ~ label {
          transform: translate(0, -30px);
        }
        input:valid ~ label {
          font-style: italic;
          text-transform: uppercase;
          transform: translate(-40px, -30px) scale(0.6);
        }
        label {
          box-sizing: border-box;
          color: #E91E63;
          position: absolute;
          padding: 10px 15px;
          margin-top: -40px;
          pointer-events: none;
          width: 100%;
        }
        button {
          background-color: white;
          border: 1px solid #E91E63;
          border-radius: 60px;
          color: #E91E63;
          display: block;
          line-height: 0;
          margin: 35px auto 0;
          padding: 20px 15px;
        }
        button:hover {
          background-color: #E91E63;
          color: white;
          cursor: pointer;
        }
      </style>
      <section>
        ${this._loading ? html`<loading-element></loading-element>` : ''}
        ${
          !this._user
            ? html`
              <h2>Hey there!</h2>
              <p>Please enter your credentials</p>
              <iron-form>
                <form>
                  <div>
                    <input id="email" name="email" type="email" required>
                    <label for="email">
                      E-Mail
                    </label>
                  </div>
                  <div>
                    <input id="password" name="email" type="password" minlength="8" required>
                    <label for ="email">
                      Password
                    </label>
                  </div>
                  <button class="btn" type="button" @click="${
                    this._login
                  }">Login</button>
                </form>
              </iron-form>
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
      _loginFailure: {
        type: Boolean,
        statePath({ auth }) {
          return auth.loginFailure
        }
      }
    }
  }

  static get observers() {
    return ['_isNotEmpty(_email)']
  }

  _login(e) {
    const email = this.shadowRoot.querySelector('#email')
    const password = this.shadowRoot.querySelector('#password')
    if (email.validity.valid && password.validity.valid) {
      store.dispatch(startLogin(email.value, password.value))
    }
  }

  _isLoggedIn() {
    window.history.pushState({}, '', '/')
    store.dispatch(navigate('/'))
  }

  stateChanged({ auth }) {
    if (this._loading !== auth.loading) {
      this._loading = auth.loading
    }

    if (this._user !== auth.uid) {
      this._user = auth.uid
    }

    if (this._loginFailure !== auth.loginFailure) {
      this._loginFailure = auth.loginFailure
    }
  }
}

window.customElements.define('login-view', LoginView)
