import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { PageController } from '@open-cells/page-controller';

@customElement('producto-page')
export class ProductoPage extends LitElement {
  pageController = new PageController(this);

  static styles = css`
    .product-container {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      max-width: min(94vw, 55rem);
      margin: 3rem auto;
    }

    .product-container img {
  width: 100%;
  max-width: 20rem;
  height: auto;
}
    }

    .product-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
   
  `;

  @property({ type: Object })
  params: {
    productoId?: string;
  } = {};
  @state()
  private _allProductos: any = [];
  @state()
  private _producto: any = {};

  connectedCallback(): void {
    super.connectedCallback();
    this.pageController.subscribe('ch_products', (data: any[]) => {
      this._allProductos = data;
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.pageController.unsubscribe('ch_products');
  }

  updated(changedProperties: { has: (arg0: string) => any }) {
    if (changedProperties.has('params')) {
      this.actualizarProducto(this._allProductos);
    }
  }

  actualizarProducto(data: any[]) {
    this._producto = data.find(
      (producto) => producto.id === this.params.productoId
    );
  }

  render() {
    return html`
      <div class="product-container">
        <img
          src="${this._producto ? this._producto.image : ''}"
          alt="${this._producto ? this._producto.title : ''}"
        />
        <div class="product-details">
          <h3>${this._producto ? this._producto.title : ''}</h3>
          <p class="product-price">
            ${this._producto ? this._producto.price : ''}
          </p>
          <p>${this._producto ? this._producto.description : ''}</p>
          <p class="product-category">
            ${this._producto ? this._producto.category : ''}
          </p>
        </div>
      </div>
    `;
  }
}
