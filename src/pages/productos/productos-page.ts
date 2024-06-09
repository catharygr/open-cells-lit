import { css, html, LitElement } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement, state } from 'lit/decorators.js';

@customElement('productos-page')
export class ProductosPage extends LitElement {
  pageController = new PageController(this);

  static styles = css`
    img {
      width: 100px;
    }
  `;

  @state() private _productos: any[] = [];

  connectedCallback(): void {
    super.connectedCallback();
    this.pageController.subscribe('ch_products', (data: any[]) => {
      this._productos = data;
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.pageController.unsubscribe('ch_products');
  }

  render() {
    console.log(this._productos);
    return html`
      <button @click="${() => this.pageController.navigate('home')}">
        Go to home page
      </button>
      ${this._productos.map(
        (producto) => html`
          <h3>${producto.title}</h3>
          <p>${producto.description}</p>
          <p>${producto.price}</p>
          <img src="${producto.image}" alt="${producto.title}" />
        `
      )}
    `;
  }
}
