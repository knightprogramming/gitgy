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

class MapView extends connect(store)(PageViewElement) {
  render() {
    return html`
      ${SharedStyles}
      <section>
        ${
          this._user
            ? html`
              <h2>Google Map View</h2>
              <p>Google map goes here</p>
            `
            : this._isLoggedIn()
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

  _isLoggedIn() {
    window.history.pushState({}, '', '/')
    store.dispatch(navigate('/'))
  }

  stateChanged({ auth }) {
    this._user = auth.uid
  }
}

window.customElements.define('map-view', MapView)
