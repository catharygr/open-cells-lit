import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('producto-page')
export class ProductoPage extends LitElement {
  static styles = css`
    p {
      color: red;
    }
  `;
  render() {
    return html` <p>Producto</p>`;
  }
}
