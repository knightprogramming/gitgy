/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

/** styles courtesy of https://loading.io/css/ and inspired by https://codepen.io/MattIn4D/pen/LiKFC */

import { html } from '@polymer/lit-element'

export const LoginViewStyles = html`
  <style>
    h2 {
      margin-bottom: 0;
    }
    p {
      margin-bottom: 0;
      text-align: center;
    }
    input,
    label,
    button {
      -webkit-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
      -moz-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
      -ms-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
      -o-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
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
      border: 1px solid #e91e63;
      border-radius: 60px;
      box-sizing: border-box;
      color: #e91e63;
      font-size: 16px;
      margin-top: 30px;
      padding: 10px 15px;
      width: 100%;
    }
    input:focus {
      background: #e91e63;
      color: white;
      outline: none;
    }
    input:valid {
      margin-top: 30px;
    }
    input:focus ~ label {
      -webkit-transform: translate(0, -30px);
      -moz-transform: translate(0, -30px);
      -ms-transform: translate(0, -30px);
      -o-transform: translate(0, -30px);
      transform: translate(0, -30px);
    }
    .hasText {
      -webkit-transform: translate(0, -30px);
      -moz-transform: translate(0, -30px);
      -ms-transform: translate(0, -30px);
      -o-transform: translate(0, -30px);
      transform: translate(0, -30px);
    }
    input:valid ~ label {
      font-style: italic;
      text-transform: uppercase;
      -webkit-transform: translate(-40px, -30px) scale(0.6);
      -moz-transform: translate(-40px, -30px) scale(0.6);
      -ms-transform: translate(-40px, -30px) scale(0.6);
      -o-transform: translate(-40px, -30px) scale(0.6);
      transform: translate(-40px, -30px) scale(0.6);
    }
    label {
      box-sizing: border-box;
      color: #e91e63;
      left: 0;
      position: absolute;
      padding: 10px 15px;
      pointer-events: none;
      top: 28px;
      width: 100%;
    }
    .forgot {
      color: rgb(41, 50, 55, 0.5);
      font-size: 12px;
    }
    .forgot a {
      color: rgba(233, 30, 99, 0.5);
    }
  </style>
`
