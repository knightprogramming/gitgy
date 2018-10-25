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

export const ButtonSharedStyles = html`
<style>
  button {
    font-size: inherit;
    vertical-align: middle;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  button:hover svg {
    fill: var(--app-primary-color);
  }
  .btn {
    background-color: white;
    border: 1px solid #E91E63;
    border-radius: 60px;
    color: #E91E63;
    display: block;
    line-height: 0;
    margin: 35px auto 0;
    padding: 20px 15px;
  }
  .btn:hover {
    background-color: #E91E63;
    color: white;
    cursor: pointer;
  }
  .btn:disabled {
    color: rgba(233, 30, 99, 0.5);
    border-color: rgba(233, 30, 99, 0.5);
  }
  .btn:disabled:hover {
    background-color: white;
    color: rgba(233, 30, 99, 0.5);
    cursor: default;
  }
</style>
`
