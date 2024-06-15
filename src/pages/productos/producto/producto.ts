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

    .product-details {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .product-details h3 {
    f ont-size: 1.5rem;
      font-weight: 900;
    }

    .product-price {
    font-weight: 900;
    }
    
   .product-category {
    color: gray;
   }

  .btn-product {
    padding: 0.5rem 1rem;
    background-color: purple;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 0.5rem;
   
  `;

  @property({ type: Object })
  params: {
    productoId?: string;
  } = {};
  @state()
  private _allProductos: any = [];
  @state()
  private _producto: any = {};
  @state()
  private _favoritos: any[] = [];

  connectedCallback(): void {
    super.connectedCallback();
    this.pageController.subscribe('ch_products', (data: any[]) => {
      this._allProductos = data;
    });
    this.pageController.subscribe('ch_favs', (data: any[]) => {
      this._favoritos = data;
    });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.pageController.unsubscribe('ch_products');
    this.pageController.unsubscribe('ch_favs');
  }

  updated(changedProperties: { has: (arg0: string) => any }) {
    if (changedProperties.has('params')) {
      this.actualizarProducto(this._allProductos);
    }
  }

  favoritos() {
    this.pageController.publish('ch_favs', [
      ...this._favoritos,
      this._producto,
    ]);
  }

  actualizarProducto(data: any[]) {
    this._producto = data.find(
      (producto) => producto.id === this.params.productoId
    );
    window.scrollTo(0, 0);
  }

  render() {
    return html`
      <div class="product-container">
        <div class="product-details">
          <img
            src="${this._producto ? this._producto.image : ''}"
            alt="${this._producto ? this._producto.title : ''}"
          />
          <h3>${this._producto ? this._producto.title : ''}</h3>
          <p class="product-price">
            ${this._producto ? this._producto.price : ''}
          </p>
          <p>${this._producto ? this._producto.description : ''}</p>
          <p class="product-category">
            ${this._producto ? this._producto.category : ''}
          </p>
        </div>
        <button class="btn-product" @click="${this.favoritos}">
          Add a favoritos
        </button>
      </div>
    `;
  }
}
