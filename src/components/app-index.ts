import { startApp } from '@open-cells/core';
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ElementController } from '@open-cells/element-controller';
import { routes } from '../router/routes.js';
import { styles } from './app-index.css.js';
import data from '../data/db-backup.json';

startApp({
  routes,
  mainNode: 'app-content',
});

@customElement('app-index')
export class AppIndex extends LitElement {
  elementController = new ElementController(this);

  connectedCallback(): void {
    super.connectedCallback();
    this.elementController.publish('ch_products', data.products);
  }

  static styles = styles;

  render() {
    return html`
      <main role="main" tabindex="-1">
        <slot></slot>
      </main>
    `;
  }
}
