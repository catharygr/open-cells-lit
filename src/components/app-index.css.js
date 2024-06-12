/*
 * Copyright 2024 Bilbao Vizcaya Argentaria, S.A.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { css } from 'lit';

export const styles = css`
:host {
    --on-surface-variant: var(--on-surface-variant-dark, #53433f);
    --on-surface: var(--on-surface-dark, #1f1b13);
    --primary: var(--primary-dark, #725c0c);
    --surface: var(--surface-dark, #fff8f0);
    --surface-container-highest: var(--surface-container-highest-dark, #eae2d4);
    --surface-container: var(--surface-container-dark, #f5eddf);
    --outline: var(--outline-dark, #85736e);
    --header-gradient: var(--header-gradient-dark, rgba(255, 248, 240, 1));

     /* DARK MODE */
  /* @media (prefers-color-scheme: dark) {
    :host {
      --primary-dark: #E2C46D;
      --on-surface-dark: #EAE2D4;
      --on-surface-variant-dark: #CFC6B4;
      --surface-container-dark: #2D2A21;
      --surface-container-high-dark: #2D2A21;
      --surface-container-highest-dark: #38342B;
      --surface-dark: #16130B;
      --outline-dark: #989080;
    }
  } */

  :root[color-scheme-dark] {
    --primary-dark: #e2c46d;
    --on-surface-dark: #eae2d4;
    --on-surface-variant-dark: #cfc6b4;
    --surface-container-dark: #2d2a21;
    --surface-container-high-dark: #2d2a21;
    --surface-container-highest-dark: #38342b;
    --surface-dark: #16130b;
    --outline-dark: #989080;
    --header-gradient-dark: rgba(22, 19, 11, 1);
  }
  :host {
    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
  }
  main {
    flex: 1;
    position: relative;
    // overflow: hidden;
  }

  main ::slotted(*) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    visibility: hidden;
  }

  main ::slotted([state='active']) {
    visibility: visible;
  }
`;
