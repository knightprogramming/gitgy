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
  /* Absolute Center Spinner */
  :host {
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

  /* :not(:required) hides these rules from IE9 and below */
  :host:not(:required) {
    /* hide "loading..." text */
    background-color: transparent;
    border: 0;
    color: transparent;
    font: 0 / 0 a;
    text-shadow: none;
  }

  :host:not(:required):after {
    -webkit-animation: spinner 1500ms infinite linear;
    -moz-animation: spinner 1500ms infinite linear;
    -ms-animation: spinner 1500ms infinite linear;
    -o-animation: spinner 1500ms infinite linear;
    animation: spinner 1500ms infinite linear;
    border-radius: 0.5em;
    -webkit-box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0,
      rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0,
      rgba(0, 0, 0, 0.75) - 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.5) - 1.5em 0 0 0,
      rgba(0, 0, 0, 0.5) - 1.1em - 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 - 1.5em 0 0,
      rgba(0, 0, 0, 0.75) 1.1em - 1.1em 0 0;
    box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0,
      rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0,
      rgba(0, 0, 0, 0.75) - 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) - 1.5em 0 0 0,
      rgba(0, 0, 0, 0.75) - 1.1em - 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 - 1.5em 0 0,
      rgba(0, 0, 0, 0.75) 1.1em - 1.1em 0 0;
    content: '';
    display: block;
    font-size: 10px;
    height: 1em;
    margin-top: -0.5em;
    width: 1em;
  }

  /* Animation */
  @-webkit-keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-moz-keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-o-keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes spinner {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

</style>
`
