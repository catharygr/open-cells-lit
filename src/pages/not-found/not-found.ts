import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PageController } from '@open-cells/page-controller';

@customElement('not-found-page')
export class NotFoundPage extends LitElement {
  controller = new PageController(this);

  config = {
    category: 'frutas',
    disponibilidad: true,
    productoId: '1',
  };

  render() {
    return html`
      <h1>404</h1>
      <p>Page not found</p>
      <button @click=${() => this.controller.navigate('producto', this.config)}>
        Home
      </button>
    `;
  }
}
