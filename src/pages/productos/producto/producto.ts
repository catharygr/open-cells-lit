import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { PageController } from '@open-cells/page-controller';

@customElement('producto-page')
export class ProductoPage extends LitElement {
  pageController = new PageController(this);

  static styles = css`
    h3 {
      color: red;
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
    return html` <h3>${this._producto ? this._producto.title : ''}</h3>`;
  }
}
