import { css, html, LitElement } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement, state } from 'lit/decorators.js';

@customElement('productos-page')
export class ProductosPage extends LitElement {
  pageController = new PageController(this);

  static styles = css`
    .products-container {
      padding: 2rem;
      max-width: 600px;
      margin: 0 auto;
    }
    img {
      width: 100px;
    }
  `;

  @state() private _productos: any[] = [];

  onPageEnter() {
    this.pageController.subscribe('ch_products', (data: any[]) => {
      this._productos = data;
    });
  }

  onPageLeave() {
    this.pageController.unsubscribe('ch_products');
  }

  render() {
    return html`
      <div class="products-container">
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
      </div>
    `;
  }
}
