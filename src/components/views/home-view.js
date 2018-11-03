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
import { navigate } from '../../actions/app'

// These are the shared styles needed by this element.
import { SharedStyles } from '../shared-styles.js'
import { ButtonSharedStyles } from '../button-shared-styles'

class HomeView extends connect(store)(PageViewElement) {
  render() {
    return html`
      ${SharedStyles}
      ${ButtonSharedStyles}
      <style>
        p {
          text-align: center;
        }
      </style>
      <section>
        <h2>GITGY</h2>
        <p>Get your scare on...boo!</p>
        ${
          !this._user
            ? html`
              <div>
                <button class="btn" @click="${this._goToLogin}">Login</button>
                <button class="btn btn--sibling" @click="${
                  this._goToSignUp
                }">Sign Up</button>
              </div>`
            : ''
        }
      </section>
    `
  }

  static get properties() {
    return {
      _user: {
        type: String,
        statePath({ auth }) {
          return auth.uid
        }
      }
    }
  }

  _goToLogin() {
    window.history.pushState({}, '', '/login')
    store.dispatch(navigate('/login'))
  }

  _goToSignUp() {
    window.history.pushState({}, '', '/signup')
    store.dispatch(navigate('/signup'))
  }

  stateChanged({ auth }) {
    this._user = auth.uid
  }
}

window.customElements.define('home-view', HomeView)
