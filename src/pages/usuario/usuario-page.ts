import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PageController } from '@open-cells/page-controller';

@customElement('usuario-page')
export class UsuarioPage extends LitElement {
  controller = new PageController(this);

  salir() {
    this.controller.updateInterceptorContext({ logueado: false });
    this.controller.navigate('home');
  }
  render() {
    return html`
      <h1>Usuario</h1>
      <button @click=${this.salir}>Salir y volver a home</button>
    `;
  }
}
