import { html, LitElement } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement } from 'lit/decorators.js';
import data from '../../data/db-backup.json';

// @ts-ignore
@customElement('productos-page')
export class ProductosPage extends LitElement {
  pageController = new PageController(this);

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    // @ts-ignore
    return this;
  }

  render() {
    return html`
      <button @click="${() => this.pageController.navigate('home')}">
        Go to home page
      </button>
    `;
  }
}
