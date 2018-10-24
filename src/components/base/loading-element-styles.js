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

export const ButtonSharedStyles = html`
<style>
  /* Absolute Center Spinner */
  :host {
    -webkit-animation: fadein 1s;
    -moz-animation: fadein 1s;
    -ms-animation: fadein 1s;
    -o-animation: fadein 1s;
    animation: fadein 1s;
    bottom: 0;
    height: 2em;
    left: 0;
    margin: auto;
    overflow: show;
    position: fixed;
    right: 0;
    top: 0;
    width: 2em;
    z-index: 999;
  }

  /* Transparent Overlay */
  :host:before {
    background-color: rgba(0, 0, 0, 0.3);
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
  }
  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* Spinner */
  .spinner {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }
  .spinner div {
    position: absolute;
    width: 5px;
    height: 5px;
    background: #fff;
    border-radius: 50%;
    -webkit-animation: spinner 1.2s linear infinite;
    -moz-animation: spinner 1.2s linear infinite;
    -ms-animation: spinner 1.2s linear infinite;
    -o-animation: spinner 1.2s linear infinite;
    animation: spinner 1.2s linear infinite;
  }
  .spinner div:nth-child(1) {
    animation-delay: 0s;
    top: 29px;
    left: 53px;
  }
  .spinner div:nth-child(2) {
    animation-delay: -0.1s;
    top: 18px;
    left: 50px;
  }
  .spinner div:nth-child(3) {
    animation-delay: -0.2s;
    top: 9px;
    left: 41px;
  }
  .spinner div:nth-child(4) {
    animation-delay: -0.3s;
    top: 6px;
    left: 29px;
  }
  .spinner div:nth-child(5) {
    animation-delay: -0.4s;
    top: 9px;
    left: 18px;
  }
  .spinner div:nth-child(6) {
    animation-delay: -0.5s;
    top: 18px;
    left: 9px;
  }
  .spinner div:nth-child(7) {
    animation-delay: -0.6s;
    top: 29px;
    left: 6px;
  }
  .spinner div:nth-child(8) {
    animation-delay: -0.7s;
    top: 41px;
    left: 9px;
  }
  .spinner div:nth-child(9) {
    animation-delay: -0.8s;
    top: 50px;
    left: 18px;
  }
  .spinner div:nth-child(10) {
    animation-delay: -0.9s;
    top: 53px;
    left: 29px;
  }
  .spinner div:nth-child(11) {
    animation-delay: -1s;
    top: 50px;
    left: 41px;
  }
  .spinner div:nth-child(12) {
    animation-delay: -1.1s;
    top: 41px;
    left: 50px;
  }
  @keyframes spinner {
    0%, 20%, 80%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
  }
  @-moz-keyframes spinner {
    0%, 20%, 80%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
  }
  @-webkit-keyframes spinner {
    0%, 20%, 80%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
  }
  @-ms-keyframes spinner {
    0%, 20%, 80%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
  }
  @-o-keyframes spinner {
    0%, 20%, 80%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
  }
</style>
`
