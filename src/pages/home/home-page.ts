import { html, LitElement } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement } from 'lit/decorators.js';

// @ts-ignore
@customElement('home-page')
export class HomePage extends LitElement {
  pageController = new PageController(this);

  protected createRenderRoot(): HTMLElement | DocumentFragment {
    // @ts-ignore
    return this;
  }

  render() {
    return html`
      <button @click="${() => this.pageController.navigate('productos')}">
        Go to productos page
      </button>
      <button @click="${() => this.pageController.navigate('contador')}">
        Go to contador page
      </button>
    `;
  }
}
