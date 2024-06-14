// @ts-nocheck
import { startApp } from '@open-cells/core';
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
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

  interceptor: function (navigation, ctx) {
    let intercept = false;
    let redirect: string | undefined;

    if (!ctx.logueado && navigation.to.page === 'usuario') {
      intercept = true;

      redirect = { page: 'login', params: {} };
    }

    if (!ctx.logueado && navigation.to.page === 'producto') {
      intercept = true;

      redirect = { page: 'login', params: {} };
    }

    return { intercept, redirect };
  },
});

@customElement('app-index')
export class AppIndex extends LitElement {
  elementController = new ElementController(this);

  connectedCallback(): void {
    super.connectedCallback();
    this.elementController.publish('ch_products', data.products);
    this.elementController.publish('ch_favoritos', [
      {
        id: '40',
        title: 'favorito 1',
        description: 'Descripcion del producto 1',
      },
      {
        id: '50',
        title: 'favorito 2',
        description: 'Descripcion del producto 2',
      },
    ]);

    this.elementController.subscribe('ch_favoritos', (data: any[]) => {
      this._favoritos = data;
    });
  }

  static styles = styles;

  render() {
    return html`
      <header-component> </header-component>
      <main role="main" tabindex="-1">
        <slot></slot>
      </main>
    `;
  }
}
