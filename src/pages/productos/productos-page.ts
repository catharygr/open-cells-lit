import { css, html, LitElement } from 'lit';
import { PageController } from '@open-cells/page-controller';
import { customElement } from 'lit/decorators.js';

@customElement('productos-page')
export class ProductosPage extends LitElement {
  [x: string]: any;
  pageController = new PageController(this);

  static styles = css`
    .products-container {
       display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 0.5rem;
    }
    .product-card {
      position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-basis: 200px;
  flex-grow: 1;
  border: 1px solid rgb(233, 233, 233);
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 5px 0 rgb(0 0 0 / 10%);
  padding: 0.5rem;
  height: 100%;
    .card-img {
  aspect-ratio: 3/2;
  object-fit: cover;
}
.card-body {
 display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem;
  height: 100%;
  }
    .link-crad-title {
      text-decoration: underline;
      cursor: pointer;
      font-size: 0.7rem;
    }
      .card-description {
       font-size: 0.7rem;
      }
       .card-price {
        font-size: 0.9rem;
  font-weight: 900;

}
  `;

  // @state() private _productos: any[] = [];

  // connectedCallback() {
  //   super.connectedCallback();
  //   this.pageController.subscribe('ch_products', (data: any[]) => {
  //     this._productos = data;
  //   });
  // }

  // disconnectedCallback() {
  //   super.disconnectedCallback();
  //   this.pageController.unsubscribe( 'ch_products');
  // }

  static inbounds = {
    _productos: { channel: 'ch_products' },
  };

  render() {
    return html`
      <div class="products-container">
        ${this._productos.map(
          (producto: any) => html`
            <div class="product-card">
              <img
                class="card-img"
                src="${producto.image}"
                alt="${producto.title}"
              />
              <div class="card-body">
                <h3
                  class="link-crad-title"
                  @click="${() =>
                    this.pageController.navigate('producto', {
                      productoId: producto.id,
                    })}"
                >
                  ${producto.title}
                </h3>
                <p class="card-description">${producto.description}</p>
                <p class="card-price">${producto.price}</p>
              </div>
            </div>
          `
        )}
      </div>
    `;
  }
}
