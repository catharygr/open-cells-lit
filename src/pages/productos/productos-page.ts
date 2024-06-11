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
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 2rem;
    }
    .product-card {
      border: 1px solid #ccc;
      border-radius: 10px;
      padding: 1rem;
      text-align: center;
    }
    img {
      width: 100px;
    }
    .link {
      text-decoration: underline;
      cursor: pointer;
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
      <button @click="${() => this.pageController.navigate('home')}">
        Go to home page
      </button>
      <div class="products-container">
        ${this._productos.map(
          (producto) => html`
            <div class="product-card">
              <h3
                class="link"
                @click="${() =>
                  this.pageController.navigate('producto', {
                    productoId: producto.id,
                  })}"
              >
                ${producto.title}
              </h3>
              <p>${producto.description}</p>
              <p>${producto.price}</p>
              <img src="${producto.image}" alt="${producto.title}" />
            </div>
          `
        )}
      </div>
    `;
  }
}
