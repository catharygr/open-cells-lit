import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PageController } from '@open-cells/page-controller';

@customElement('login-page')
export class LoginPage extends LitElement {
  controller = new PageController(this);

  loguear() {
    this.controller.updateInterceptorContext({ logueado: true });
  }
  render() {
    return html`
      <h1>Login page</h1>
      <button @click=${this.loguear}>Loguear</button>
    `;
  }
}
