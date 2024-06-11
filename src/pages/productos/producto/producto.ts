import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { PageController } from '@open-cells/page-controller';

@customElement('producto-page')
export class ProductoPage extends LitElement {
  pageController = new PageController(this);
  @property({ type: Object })
  params: {
    productoId?: string;
    sort?: string;
  } = {};

  static styles = css`
    h3 {
      color: red;
    }
  `;

  @state() private _productos: any = {};

  onPageEnter() {
    this.pageController.subscribe('ch_products', (data: any[]) => {
      this._productos = data.find(
        (producto) => producto.id === this.params.productoId
      );
    });
  }

  onPageLeave() {
    this.pageController.unsubscribe('ch_products');
  }

  render() {
    return html` <h3>${this._productos.title}</h3>`;
  }
}
