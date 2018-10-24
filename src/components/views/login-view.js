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

// We are lazy loading its reducer.
import auth from '../../reducers/auth'
store.addReducers({
  auth
})

// These are the shared styles needed by this element.
import { SharedStyles } from '../shared-styles.js'

// These are the elements needed by this element.
import '@polymer/iron-form/iron-form'
import '../base/loading-element'

class LoginView extends connect(store)(PageViewElement) {
  render() {
    return html`
      ${SharedStyles}
      <section>
        ${this._loading ? html`<loading-element></loading-element>` : ''}
        ${
          !this._user
            ? html`
              <h2>Login</h2>
              <iron-form>
                <form>
                  <label for="email">
                    Email
                    <input id="email" name="email" type="email" placeholder="Username" required autofocus="">
                  </label>
                  <label for ="email">
                    Password
                    <input id="password" name="email" type="password" placeholder="Password" required>
                  </label>
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
