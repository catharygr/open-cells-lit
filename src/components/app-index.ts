import { startApp } from '@open-cells/core';
import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { ElementController } from '@open-cells/element-controller';
import { routes } from '../router/routes.js';
import { styles } from './app-index.css.js';
import data from '../data/db-backup.json';
import './header.js';

startApp({
  routes,
  mainNode: 'app-content',
  viewLimit: 2,
  persistentPages: ['home'],
  // @ts-ignore
  interceptor: function (navigation, ctx) {
    let intercept = false;
    let redirect: string | undefined;
    // @ts-ignore
    if (!ctx.logueado && navigation.to.page === 'usuario') {
      intercept = true;
      // @ts-ignore
      redirect = { page: 'login', params: {} };
    }
    // @ts-ignore
    if (!ctx.logueado && navigation.to.page === 'producto') {
      intercept = true;
      // @ts-ignore
      redirect = { page: 'login', params: {} };
    }

    return { intercept, redirect };
  },
});

@customElement('app-index')
export class AppIndex extends LitElement {
  elementController = new ElementController(this);
  @state()
  protected _root: HTMLElement | null = null;

  connectedCallback(): void {
    super.connectedCallback();
    this.elementController.publish('ch_products', data.products);
  }

  static styles = styles;

  _toogleDarkMode() {
    this._root?.hasAttribute('color-scheme-dark')
      ? this._root?.removeAttribute('color-scheme-dark')
      : this._root?.setAttribute('color-scheme-dark', 'true');
  }

  render() {
    return html`
      <header-component>
        <md-outlined-icon-button
          class="dark-mode"
          aria-label="Dark Mode"
          data-mode="light"
          toggle
          @click=${() => this._toogleDarkMode()}
        >
          <md-icon>dark_mode</md-icon>
          <md-icon slot="selected">light_mode</md-icon>
        </md-outlined-icon-button>
      </header-component>
      <main role="main" tabindex="-1">
        <slot></slot>
      </main>
    `;
  }
}
