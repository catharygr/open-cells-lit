import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PageController } from '@open-cells/page-controller';

@customElement('login-page')
export class LoginPage extends LitElement {
  controller = new PageController(this);

  onPageEnter() {
    this.controller.subscribe('__oc_intercepted_navigation', (data: any) => {
      console.log(data);
    });
  }

  loguearUsuario() {
    this.controller.updateInterceptorContext({ logueado: true });
    this.controller.navigate('usuario');
  }
  loguearProducto() {
    this.controller.updateInterceptorContext({ logueado: true });
    this.controller.navigate('productos');
  }
  render() {
    return html`
      <h1>Login page</h1>
      <button @click=${this.loguearUsuario}>Loguear usuario</button>
      <button @click=${this.loguearProducto}>Loguear producto</button>
    `;
  }
}
